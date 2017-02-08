export const INTRO_TEXT = 'Create a Sender Policy Framework record for your domain.';

export const initialValues = {
  mx: {
    useDefault: true,
    hosts: []
  },
  a: {
    useDefault: true,
    hosts: []
  },
  ip: [],
  include: [],
  all: 'Fail'
};

export const ALL_TEXT = {
  'Fail': 'Non-compliant email will not be accepted.',
  'Soft Fail': 'Non-compliant email will be accepted but marked or tagged as non-compliant.'
};
