import PageWrapper from "../../components/PageWrapper/pageWrapper";
import { IonText } from "@ionic/react";
import "./categoryRegistration.css";
import useCategoryRegistration from "./hooks/useCategoryRegistration";

const CategoryRegistration = () => {
  const { handleUpdateRole } = useCategoryRegistration();

  return (
    <PageWrapper className="category-register-page">
      <div className="flex flex-col gap-y-[80px] py-[120px]">
        <div className="flex flex-col gap-y-5 items-center justify-center">
          <IonText className="font-black text-3xl text-primary text-center">
            DormApp
          </IonText>
          <IonText className="text-lg font-semibold mt-1">
            Which user category do you belong to?
          </IonText>
        </div>
        <div className="flex flex-col gap-y-3">
          <button
            className="py-4 px-5 text-left text-sm border border-solid border-lightGrey text-lightGrey rounded"
            onClick={() => handleUpdateRole("Admin")}
          >
            Admin
          </button>
          <button
            className="py-4 px-5 text-left text-sm border border-solid border-lightGrey text-lightGrey rounded"
            onClick={() => handleUpdateRole("Staff")}
          >
            Staff
          </button>
          <button
            className="py-4 px-5 text-left text-sm border border-solid border-lightGrey text-lightGrey rounded"
            onClick={() => handleUpdateRole("Student")}
          >
            Student
          </button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default CategoryRegistration;
