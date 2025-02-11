
export const CheckoutValidation = (formData: any) => {

    const newErrors: any = {};
    let isValid = true;

    if (!formData.firstname.trim()) {
        newErrors.firstname = "First name is required";
        isValid = false;
    } else if (!/^[A-Za-z]+$/.test(formData.firstname)) {
        newErrors.firstname = "First name must contain only letters";
        isValid = false;
    } else if (formData.firstname.length < 2 || formData.firstname.length > 15) {
        newErrors.firstname = "First name must be between 2 and 15 characters";
        isValid = false;
    }   

    if (!formData.lastname.trim()) {
        newErrors.lastname = "Last name is required";
        isValid = false;
    } else if (!/^[A-Za-z]+$/.test(formData.lastname)) {
        newErrors.lastname = "Last name must contain only letters";
        isValid = false;
    } else if (formData.lastname.length < 2 || formData.lastname.length > 15) {
        newErrors.lastname = "Last name must be between 2 and 15 characters";
        isValid = false;
    }

    if (!formData.zipcode.trim()) {
      newErrors.zipcode = "ZIP code is required";
      isValid = false;
    } else if (!/^\d{5}\d{3}$/.test(formData.zipcode)) {
        newErrors.zipcode = "Invalid ZIP code";
        isValid = false;
    }
    

    if (!formData.country.trim()) {
      newErrors.country = "Country is required";
      isValid = false;
    } else if (!/^[A-Za-z]+$/.test(formData.country)) {
        newErrors.country = "Country must contain only letters";
        isValid = false;
    } else if (formData.country.length < 2 || formData.country.length > 15) {
        newErrors.country = "Country must be between 2 and 15 characters";
        isValid = false;
    }

    if (!formData.street.trim()) {
      newErrors.street = "Street address is required";
      isValid = false;
    } else if (formData.street.length < 2 || formData.street.length > 15) {
        newErrors.street = "Street must be between 2 and 15 characters";
        isValid = false;
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
      isValid = false;
    } else if (!/^[A-Za-z]+$/.test(formData.city)) {
        newErrors.city = "City must contain only letters";
        isValid = false;
    } else if (formData.city.length < 2 || formData.city.length > 30) {
        newErrors.city = "City must be between 2 and 30 characters";
        isValid = false;
    }


    if (!formData.province.trim()) {
      newErrors.province = "Province is required";
      isValid = false;
    } else if (!/^[A-Za-z]+$/.test(formData.province)) {
        newErrors.province = "Province must contain only letters";
        isValid = false;
    } else if (formData.province.length < 2 || formData.province.length > 30) {
        newErrors.province = "Province must be between 2 and 30 characters";
        isValid = false;
    }

    if (!formData.addonAddress.trim()) {
      newErrors.addonAddress = "Add-on address is required";
      isValid = false;
    } else if (formData.addonAddress.length < 2 || formData.addonAddress.length > 30) {
        newErrors.addonAddress = "AddonAddress must be between 2 and 30 characters";
        isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
        isValid = false;
    }

  return { isValid, newErrors };
}
