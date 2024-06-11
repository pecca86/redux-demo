import supabase from './supabase';

export const login = async (email, password) => {
    let { data: user, error } = await supabase.auth.signInWithPassword(
        email,
        password
    );

    if (error) {
        throw new Error(error.message);
    }

    return user;
};

export async function getCurrenUser() {
    const { data: session } = await supabase.auth.getSession();
    if (!session.session) {
        return null;
    }

    const { data, error } = await supabase.auth.getUser();

    if (error) {
        throw new Error(error.message);
    }

    return data?.user;
}

export async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
        throw new Error(error.message);
    }
}

export const signUp = async ({email, password, name}) => {
    console.log('signUp ', email, password, name);
    await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name: name
        }
      }
    });
  };