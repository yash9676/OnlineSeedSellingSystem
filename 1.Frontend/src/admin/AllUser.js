import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { url } from "../common/constant";
import $ from "jquery";
// import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import  HomepageAdminNavbar  from "../components/HomapageAdminNavbar";
const AllUser = () => {
    const [users, setUser] = useState([]);
    const history = useHistory();

    const isLogIn = useSelector((state) => state.isSignin);

    if(isLogIn.status === false){
        alert('please signin first!!')
        history.push('/signin')
      }

    useEffect(() => {
        console.log("User component is mounted");
        getUser();
    
    } , []);

    const getUser = () => {
        axios.get(url+"/admin/allUsers").then((response) => {
            const result = response.data;
            console.log(result);
            if (result.status === "OK" ) {
                setUser(result.response);
            }else{
                alert("users not found");
            }
        });
    }

    // const deleteUser = (user) => {
    //     console.log(user.id);
    //     axios.delete(url+"/admin/deleteUser/"+user.id).then((response) => {
    //         const result = response.data;
    //         if(result.status === "OK"){

    //             getUser();
    //         }else{
    //             alert("error while user deletion");
    //         }
    //     })
    // }

    function deleteUser(user) {
        console.log(user.applicantId);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(url+"/admin/deleteUser/"+user.id).then((response) => {
                    const res = response.data;
                    if (res.status === 'OK') {
                        alert("sucessfully deleted");
                        getUser();
                    } else {
                        Swal.fire({
                            icon: 'error',

                            title: 'Oops...',
                            text: 'Something went wrong!',
                            text: 'Error Deleting License',
                            
                        });

                    }
                });
            }
        }); 
    }

    $(document).ready(function(){
        $("#myInput").on("keyup", function() {
          var value = $(this).val().toLowerCase();
          $("#myTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });
      });

    return(
        <div>
            <HomepageAdminNavbar/>
            <h1 align="center">All User</h1> 
            <table className="table">
                <thead class="thead-dark">
                
                    <tr>
                        <th>Id</th>
                        <th>FirstName</th>
                        <th>LasttName</th>
                        <th>email</th>
                        {/* <th>password</th> */}
                        <th>Phone No.</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody id="myTable">
                    {
                        users.length >= 1 ? users.map(user => {
                            return(
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    {/* <td>{user.password}</td> */}
                                    <td>{user.phoneNumber}</td>
                                    <td>
                                        <button type="button" class="btn btn-danger" onClick={()=>{deleteUser(user)}}>
                                           Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        }):''
                    }
                </tbody>
            </table>  
        </div>
    )
}


export default AllUser;