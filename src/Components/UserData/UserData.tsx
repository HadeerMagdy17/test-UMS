import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface UserFormData {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  phone: number;
  birthDate: string;
}

export default function UserData() {
  
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>();

  const onSubmit: SubmitHandler<UserFormData> = async (data) => {
    try {
      const response = await axios.post("https://dummyjson.com/users/add", data);
      console.log(response);
      toast.success("Yeah! User added successfully!");
      navigate("/dashboard/users-list");
    } catch (error) {
      console.error(error);
      toast.error("Sorry, something went wrong.");
    }
  };

  return (
    <>
      <div className="m-3">
        <h3>Add User</h3>
      </div>
      <hr />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="shadow-lg mt-5 m-5 p-4 border rounded"
      >
        <div className="row">
          <div className="col-md-6">
            <div className="mb-1">
              <label className="form-label">First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Firstname"
                {...register("firstName", { required: "First name is required" })}
              />
              {errors.firstName && (
                <span className="text-danger">{errors.firstName.message}</span>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-1">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Last name"
                {...register("lastName", { required: "Last name is required" })}
              />
              {errors.lastName && (
                <span className="text-danger">{errors.lastName.message}</span>
              )}
            </div>
          </div>
        </div>

        <div className="row my-3">
          <div className="col-md-6">
            <div className="mb-1">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "Email should be valid",
                  },
                })}
              />
              {errors.email && (
                <span className="text-danger">{errors.email.message}</span>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-1">
              <label className="form-label">Age</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter your Age"
                {...register("age", {
                  required: "Age is required",
                  max: { value: 50, message: "Max age is 50" },
                })}
              />
              {errors.age && (
                <span className="text-danger">{errors.age.message}</span>
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="mb-1">
              <label className="form-label">Phone Number</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter your Phone Number"
                {...register("phone", { required: "Phone number is required" })}
              />
              {errors.phone && (
                <span className="text-danger">{errors.phone.message}</span>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-1">
              <label className="form-label">Birth Date</label>
              <input
                type="date"
                className="form-control"
                placeholder="Enter your Birth Date"
                {...register("birthDate", { required: "Birth date is required" })}
              />
              {errors.birthDate && (
                <span className="text-danger">{errors.birthDate.message}</span>
              )}
            </div>
          </div>
        </div>

        <div className="text-center my-4">
          <button className="btn btn-warning w-50">Save</button>
        </div>
      </form>
    </>
  );
}


// import axios from "axios";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";



// export default function UserData() {
//   const navigate = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   let onSubmit = async (data: any) => {
//     try {
//       let response = await axios.post("https://dummyjson.com/users/add", data);
//       console.log(response);
//       toast.success("yeaaah user added successfully!!!");
//       navigate("/dashboard/users-list");
//     } catch (error) {
//       console.log(error);
//       toast.error("sorry something wrong happened");
//     }
//   };
//   return (
//     <>
    
//       <div className="m-3">
//         <h3>Add User</h3>
//       </div>
//       <hr />

//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="shadow-lg mt-5 m-5 p-4 border rounded"
//       >
//         <div className="row">
//           <div className="col-md-6">
//             <div className="mb-1">
//               <label className="form-label">First name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Enter your Firstname"
//                 {...register("firstName", {
//                   required: "first name is required",
//                 })}
//               />
//             </div>
//             {errors.firstName && (
//               <span className="text-danger">{errors.firstName.message}</span>
//             )}
//           </div>
//           <div className="col-md-6">
//             <div className="mb-1">
//               <label className="form-label">Last Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Enter your Last name"
//                 {...register("lastName", { required: "last name is required" })}
//               />
//             </div>
//             {errors.lastName && (
//               <span className="text-danger">{errors.lastName.message}</span>
//             )}
//           </div>
//         </div>

//         <div className="row my-3">
//           <div className="col-md-6">
//             <div className="mb-1">
//               <label className="form-label">Email</label>
//               <input
//                 // type="email"
//                 className="form-control"
//                 placeholder="Enter your email"
//                 {...register("email", {
//                   required: "email is required",
//                   pattern: {
//                     value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
//                     message: "email should be valid",
//                   },
//                 })}
//               />
//               {errors.email && (
//                 <span className="text-danger">{errors.email.message}</span>
//               )}
//             </div>
//           </div>
//           <div className="col-md-6">
//             <div className="mb-1">
//               <label className="form-label">Age</label>
//               <input
//                 type="number"
//                 className="form-control"
//                 placeholder="Enter your Age"
//                 {...register("age", {
//                   required: "age is required",
//                   max: { value: 50, message: "max age is 50" },
//                 })}
//               />
//             </div>
//             {errors.age && (
//               <span className="text-danger">{errors.age.message}</span>
//             )}
//           </div>
//         </div>

//         <div className="row ">
//           <div className="col-md-6">
//             <div className="mb-1">
//               <label className="form-label">Phone Number</label>
//               <input
//                 type="number"
//                 className="form-control"
//                 placeholder="Enter your Phone Number"
//                 {...register("phone", {
//                   required: "phone is required",
//                 })}
//               />
//             </div>
//             {errors.phone && (
//               <span className="text-danger">{errors.phone.message}</span>
//             )}
//           </div>
//           <div className="col-md-6">
//             <div className="mb-1">
//               <label className="form-label">birth Date</label>
//               <input
//                 type="date"
//                 className="form-control"
//                 placeholder="Enter your birth Date"
//                 {...register("birthDate", {
//                   required: "birthDate is required",
//                 })}
//               />
//             </div>
//             {errors.birthDate && (
//               <span className="text-danger">{errors.birthDate.message}</span>
//             )}
//           </div>
//         </div>
//         <div className="text-center my-4">
//           <button className="btn btn-warning w-50">Save</button>
//         </div>
//       </form>
//     </>
//   );
// }
