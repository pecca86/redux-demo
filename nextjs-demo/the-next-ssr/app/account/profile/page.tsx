import UpdateProfileForm from "@/app/_components/UpdateProfileForm";
import SelectCountry from "@/app/_components/SelectCountry";

export const metadata = {
  title: "Update profile",
};

export default function Page(): JSX.Element {
  // CHANGE
  const countryFlag = "🇫🇮";
  const nationality = "portugal";


  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-4">
        Update your guest profile
      </h2>
      <p className="text-lg mb-8 text-primary-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>
      <UpdateProfileForm>
      {/* By having it as a child to a server component and then passing it in to a client component, select country will still be rendered as a RSC */}
      <SelectCountry
            name="nationality"
            id="nationality"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            defaultCountry={nationality}
          />
      </UpdateProfileForm>
    </div>
  );
}
