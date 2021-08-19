import { Service, Card } from "@sero.run/sero";

const options = {
  hook: "order-select",
  title: "Payer XYZ Order Selection Requirements",
  description:
    "Indicates coverage requirements associated with draft orders, including expectations for prior authorization, recommended therapy alternatives, etc.",
  id: "order-select-crd",
  prefetch: {
    patient: "Patient/{{context.patientId}}",
    medications: "MedicationOrder?patient={{context.patientId}}",
  },
  extension: {
    "davinci-crd.configuration-options": [
      {
        code: "priorauth",
        type: "boolean",
        name: "Prior authorization",
        description:
          "Provides indications of whether prior authorization is required for the proposed order",
        default: true,
      },
      {
        code: "prior-auth-form",
        type: "boolean",
        name: "Prior Authorization Forms",
        description:
          "Indicates any forms that should be completed as part of a prior authorization process",
        default: true,
      },
      {
        code: "alt-drug",
        type: "boolean",
        name: "Alternative therapy",
        description:
          "Provides recommendations for alternative therapy with equivalent/similar clinical effect for which the patient has better coverage, that will incur lesser cost",
        default: true,
      },
      {
        code: "first-line",
        type: "boolean",
        name: "First-line therapy",
        description:
          "Provides alternative therapies that must be tried prior to the selected medication to receive coverage for the selected medication",
        default: true,
      },
      {
        code: "max-cards",
        type: "integer",
        name: "Maximum cards",
        description:
          "Indicates the maximum number of cards to be returned from the service.  The services will prioritize cards such as highest priority ones are delivered",
        default: 10,
      },
    ],
  },
};

const handler = async (request) => {
  const context = request.context;
  return {
    cards: [
      new Card({
        source: {
          label: "Automate Medical, Inc.",
          url: "https://www.automatemedical.com/",
        },
        summary: `What time is it?`,
        detail: `Here is the context: ${context}`,
        indicator: "info",
      }),
    ],
  };
};

export default new Service(options, handler);
