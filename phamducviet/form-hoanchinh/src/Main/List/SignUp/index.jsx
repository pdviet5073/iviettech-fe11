import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./style.css";

function SignUp(props) {
  // const {  checkValidate, error} = props;

  // const [formValue, setFormValue] = useState({
  //   Email: "",
  //   Password: "",
  //   approve: []
  // });

  // const handleChangeValue = (e) => {
  //   const { name, value , checked} = e.target;
  //   let newValueCheckbox = "";
  //   if (name==="approve"){
  //     if(checked){
  //       newValueCheckbox = [
  //         ...formValue.approve ,
  //         value,
  //       ]
  //     }
  //     else if(formValue.approve.indexOf(value) !== -1){
  //       const approveArr = formValue.approve;
  //       approveArr.splice(formValue.approve.indexOf(value));
  //       newValueCheckbox = [ ...formValue.approve ]
  //     }
  //   }
  //   else newValueCheckbox = value;

  //   setFormValue({
  //     ...formValue,

  //     [name]: value,

  //   });

  // }
  const renderCustomInput = (props) => {
    const { field, meta } = props;
    return (
      <input
        {...field}
        type="text"
        className={`form-control ${
          meta.touched && meta.error && "border-danger"
        }`}
      />
      // toán tử 3 ngôi mà không quan tâm đến giá trị thứ 2 thì dùng như trên
    );
  };

  return (
    <Formik
      initialValues={{
        Email: "",
        Password: "",
        Address: "",
        Phone: "",
        radio: "",
        confirmPassword: "",
        approve: "",
      }}
      validationSchema={Yup.object({
        Email: Yup.string()
          .email("Email chưa đúng định dạng")
          .required("Bạn chưa nhập email"),
        Password: Yup.string()
          .min(6, "Độ dài mật khẩu lớn hơn 6 kí tự")
          .required("Bạn chưa nhập mật khẩu"),
        confirmPassword: Yup.string()
          .required("Bạn chưa nhập xác thực mật khẩu")
          .oneOf([Yup.ref("Password")], "Mật khẩu xác thực chưa trùng khớp"),

        Address: Yup.string()
          .required("Bạn chưa nhập địa chỉ")
          .max("Địa chỉ không được dài quá 30 kí tự"),
        Phone: Yup.string()
          .matches(
            /(03|07|08|09|01[2|6|8|9])+([0-9]{8})\b/,
            "Số điện thoại không đúng định dạng"
          )
          .required("Bạn chưa nhập địa chỉ"),
      })}
      onSubmit={(value) => {
        console.log("Log: : SignUp -> value", value);
      }}
    >
      <Form>
        <div className="form-row ">
          <div className="form-group col-md-6">
            <label htmlFor="firstName">First Name</label>
            <Field
              type="text"
              name="firstName"
              render={(props) =>
                renderCustomInput({
                  ...props,
                  field: {
                    ...props.field,
                    placeholder: " của bạn",
                  },
                })
              }
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="lastName">Last Name</label>
            <Field
              type="text"
              name="lastName"
              render={(props) =>
                renderCustomInput({
                  ...props,
                  field: {
                    ...props.field,
                    placeholder: "Email của bạn",
                  },
                })
              }
            />
          </div>
        </div>
        <div className="form-row ">
          <div className="form-group col-md-6">
            <div>
              <label htmlFor="birthDate">Birth Date</label>
              <Field
                type="Date"
                name="birthDate"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group col-md-6">
            <div>
              <label >Gender</label>
              <div className="row">
                <div>
                  <Field
                    type="radio"
                    className="form-check-input"
                    name="radio"
                    value="1"
                  ></Field>
                  <label htmlFor="gender" className="radio-container mr-4">
                    Nam
                  </label>
                </div>

                <div>
                  <Field
                    type="radio"
                    className="form-check-input"
                    name="radio"
                    value="2"
                  ></Field>
                  <label htmlFor="gender">Nữ</label>
                </div>
            </div>
          </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <div>
              <label htmlFor="Email">Email</label>
              <Field
                type="email"
                name="Email"
                render={(props) =>
                  renderCustomInput({
                    ...props,
                    field: {
                      ...props.field,
                      placeholder: "Email của bạn",
                    },
                  })
                }
              />
            </div>
            <ErrorMessage name="Email" className="text-danger" />
          </div>
          <div className="form-group">
            <div>
              <label htmlFor="Phone">Phone Number</label>
              <Field
                type="text"
                className="form-control"
                name="Phone"
                placeholder="Apartment, studio, or floor"
                render={(props) =>
                  renderCustomInput({
                    ...props,
                    field: {
                      ...props.field,
                      placeholder: "Số điện thoại của bạn",
                    },
                  })
                }
              />
              </div>
             <ErrorMessage name="Phone" className="text-danger" />
          </div>
        </div>
        <div className="form-group row">
          <div className="form-group col-md-6">
            <label htmlFor="Password">Password</label>
            <Field type="password" className="form-control" name="Password" />
            <ErrorMessage name="Password" className="text-danger" />
          </div>
          <div className="form-group col-md-6">
            <div>
              <label htmlFor="Password">Confirm Password</label>
              <Field
                type="password"
                className="form-control"
                name="confirmPassword"
              />
            </div>
            <ErrorMessage name="confirmPassword" className="text-danger" />
          </div>
        </div>
        
      
        <div className="form-group">
          <label htmlFor="Address">Address</label>
          <Field
            type="text"
            className="form-control"
            name="Address"
            placeholder="1234 Main St"
            render={(props) =>
              renderCustomInput({
                ...props,
                field: {
                  ...props.field,
                  placeholder: "Địa chỉ của bạn",
                },
              })
            }
          />
          <ErrorMessage name="Address" className="text-danger" />
        </div>
        
      
        <div className="form-group">
          <div>
            <Field
              className="form-check-input"
              // className="form-check-Field" t
              type="checkbox"
              name="checkbox"
              value="đồng ý"
            />
            <label className="form-check-label" htmlFor="checkbox">
              Đồng ý 
            </label>
          </div>
         
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default SignUp;
