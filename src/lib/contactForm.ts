export const HELP_OPTIONS = [
  "Custom Enterprise Software",
  "LPO / Procurement Automation",
  "Enterprise AI Workflow",
  "Cloud & Systems Integration",
  "Other",
];

export type FormState = {
  firstName: string;
  lastName: string;
  company: string;
  companyEmail: string;
  phone: string;
  helpType: string;
  message: string;
};

export type FormErrors = Partial<Record<keyof FormState, string>>;

export const initialFormState: FormState = {
  firstName: "",
  lastName: "",
  company: "",
  companyEmail: "",
  phone: "",
  helpType: "",
  message: "",
};

const WEB3FORMS_ACCESS_KEY = "04d67085-d7df-4c39-8f02-9b9cdb20d7d0";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export async function submitContactForm(
  values: FormState
): Promise<{ success: boolean; message: string }> {
  const formData = new FormData();
  formData.append("access_key", WEB3FORMS_ACCESS_KEY);
  formData.append("subject", `New consultation request from ${values.company}`);
  formData.append("from_name", "QuantumEdge Website");
  formData.append("name", `${values.firstName} ${values.lastName}`.trim());
  formData.append("email", values.companyEmail);
  formData.append("phone", values.phone);
  formData.append("company", values.company);
  formData.append("help_type", values.helpType);
  formData.append("message", values.message);

  try {
    // A plain multipart FormData body (no explicit headers) keeps this a
    // CORS-simple request; Web3Forms doesn't respond to the preflight
    // OPTIONS request that a JSON content-type would trigger.
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      body: formData,
    });

    const result = (await response.json()) as { success: boolean; message?: string };

    return {
      success: Boolean(result.success),
      message: result.message ?? "Something went wrong. Please try again.",
    };
  } catch {
    return {
      success: false,
      message: "Network error. Please check your connection and try again.",
    };
  }
}

export function validateContactForm(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!values.firstName.trim()) errors.firstName = "First name is required.";
  if (!values.lastName.trim()) errors.lastName = "Last name is required.";
  if (!values.company.trim()) errors.company = "Organization name is required.";

  if (!values.companyEmail.trim()) {
    errors.companyEmail = "Company email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.companyEmail)) {
    errors.companyEmail = "Enter a valid email address.";
  }

  if (!values.helpType) errors.helpType = "Please select how we can help.";

  if (!values.message.trim()) {
    errors.message = "Please describe how we can help.";
  } else if (values.message.trim().length < 20) {
    errors.message = "Please provide at least 20 characters of detail.";
  }

  return errors;
}
