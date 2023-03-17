import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";


export default class CourseList extends Component {
    constructor(props){
        super(props);
        this.state = {
            course: [],
            sem: 0,
            semOptions: [3,4,5,6,7,8]
        };
    };

    onChangeSem = (e) => {
        this.setState({sem : e.target.value})
        axios.get(`${process.env.REACT_APP_API_URL}course?&sem=${e.target.value}`)
            .then((res) => {
                this.setState({course: res.data.data})
                // console.log(res.data.data)
            })
            .catch((err) =>{
                console.log(err)
            })
    };
 
    handleDelete = (id)=>{
        console.log('Delete '+id);

        axios.delete(`${process.env.REACT_APP_API_URL}course/delete?&id=${id}`)
            .then((res)=>{
                if(res.data.success === true){
                    const newCourse = this.state.course.filter(cour => cour._id !== id);
                    this.setState({course: newCourse});
                }
            })
            .catch((err)=>{
                console.log(err)
            })
    };

    render(){
        return(
            <div>
                <br></br>
                <select type="text" value={this.state.sem} onChange={this.onChangeSem} className="form-control">
                    <option>Select sem</option> 
                    {this.state.semOptions.map(function (x){return <option key={x}>{x}</option>})}
                </select>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Code</th>
                            <th>Sem</th>
                            <th>Credit</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.course.map((x) => {
                            return(
                                <tr key={x._id}>
                                    <td>{x.name}</td>
                                    <td>{x.code}</td>
                                    <td>{x.sem}</td>
                                    <td>{x.credit}</td>
                                    <td>
                                        <button id="x._id" type="button" className="btn btn-secondary" onClick={() => this.handleDelete(x._id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <Link to={"/courseForm"} className="btn btn-secondary">Add</Link>
            </div>
        );
    }
}