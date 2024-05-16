import supabase from "./supabase";

export const getCabins = async () => {
    const { data: cabins, error } = await supabase
        .from('cabins')
        .select('*')

    if (error) {
        console.log('error', error);
        throw new Error(error.message);
    }

    return cabins;
}

export const deleteCabin = async (id) => {
    console.log('deleting cabin with id', id);
    const { error } = await supabase
        .from('cabins')
        .delete()
        .eq('id', id);

    if (error) {
        console.log('error', error);
        throw new Error(error.message);
    }
};

export const createCabin = async (cabin, id) => {
    const hasImagePath = cabin?.image_url?.name?.startsWith('cabin-');
    const uniqueImageName = hasImagePath ? cabin.image_url : `cabin-${Date.now()}.jpg`;
    const imageBaseUrl = `https://oxhvogqvwgzguvrfkxzv.supabase.co/storage/v1/object/public/cabin_images/${uniqueImageName}`;

    // CREATE
    let query = supabase.from('cabins');

    if (!id) {
        query = query.insert([{ ...cabin, image_url: imageBaseUrl }]);
    }

    // EDIT
    if (id) {
        query = query.update({ ...cabin, image_url: imageBaseUrl }).eq('id', id);
    }

    const { data, error } = await query.select().single();

    if (error) {
        console.log('error', error);
        throw new Error(error.message);
    }

    // upload the image
    // const image_url = cabin.image_url[0];
    const { data: imageUpload, error: imageError } = await supabase
        .storage
        .from('cabin_images')
        .upload(
            uniqueImageName,
            cabin.image_url,
            { 
                cacheControl: '3600',
                upsert: false
            }
        );
    
    if (imageError) {
        console.log('error', imageError);
        deleteCabin(data.id);
        throw new Error(imageError.message);
    }

    return imageUpload;
};