// contactFormValidation.js
import { create, test, enforce, only, omitWhen } from "vest";

const contactFormValidation = create((data, fieldName) => {
  // If `fieldName` is provided, validate only that field; otherwise, validate all fields.
  if (fieldName) {
    only(fieldName);
  }

  test("name", "Name is required.", () => {
    enforce(data.name).isNotEmpty();
  });
  // Name validation
  // omitWhen(fieldName, () => {
  //   test("name", "Name is required.", () => {
  //     enforce(data.name).isNotEmpty();
  //   });

  //   test("name", "Name must be at least 2 characters long.", () => {
  //     enforce(data.name).longerThan(1);
  //   });
  // });

  // // Email validation
  // omitWhen(fieldName, () => {
  //   test("email", "Email is required.", () => {
  //     enforce(data.email).isNotEmpty();
  //   });

  //   test("email", "Email is not valid.", () => {
  //     enforce(data.email).matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  //   });
  // });

  // // Message validation
  // omitWhen(fieldName, () => {
  //   test("message", "Message is required.", () => {
  //     enforce(data.message).isNotEmpty();
  //   });

  //   test("message", "Message must be at least 10 characters long.", () => {
  //     enforce(data.message).longerThan(9);
  //   });
  // });
});

export default contactFormValidation;
