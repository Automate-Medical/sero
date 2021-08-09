/**
 *
 * @param hscrp - hscrp value
 * @param cholesterol - cholesterol value
 * @param hdlc - hdlc value
 * @param systolicBloodPressure - systolic blood pressure
 * @returns reynolds risk score - 10-year cardiovascular disease risk
 */
export function reynoldsRiskScore(
  age,
  systolicBloodPressure,
  hscrp,
  cholesterol,
  hdlc,
  hemoglobinA1c = 0,
  smoking = false,
  familyHistory = false
) {
  let B =
    0.0799 * age +
    3.317 * Math.log(systolicBloodPressure) +
    0.18 * Math.log(hscrp) +
    1.382 * Math.log(cholesterol) -
    1.172 * Math.log(hdlc);
  if (hemoglobinA1c != 0) B += 1.134;
  if (smoking == true) B += 0.818;
  if (familyHistory == true) B += 0.438;
  return (1 - Math.pow(0.98634, Math.exp(B - 22.325))) * 100;
}

/**
 *
 * @param patient - fhir Patient
 * @returns number, the patients age
 */
export function getAge(patient) {
  const ageDate = new Date(Date.now() - new Date(patient.birthDate).getTime());
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

/**
 *
 * @param value -
 * @returns the numerical value of the measurement. There are two components
 * to the blood pressure and we want the systolic blood pressure, or the
 * first item ([0])
 */
export function getBloodPressure(value) {
  return value.entry[0].resource.component[0].valueQuantity.value;
}

/**
 *
 * @param value - value we are trying to determine (hscrp, cholesterol, or Hdlc)
 * @returns
 */
export function getValue(value) {
  return value.entry[0].resource.valueQuantity.value;
}

export function getCholesterol(value) {
  return value.entry[0].resource.valueQuantity.value;
}

/**
 *
 * @param value -
 * @ returns the numerical value of the measurement
 */
export function getHdlc(value) {
  return value.entry[0].resource.valueQuantity.value;
}
