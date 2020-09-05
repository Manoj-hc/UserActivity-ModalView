import React  from 'react';
import UserModal from './UserModal';

class UserTable extends UserModal {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            showModal: false,
            userData:{}
        }
    }

    getUserDetailsFromMockApi = () => {
        fetch('https://511cb74f-6e53-49ad-8555-66cf447026ae.mock.pstmn.io/v1/user', { method: 'GET' })
            .then(res => res.json())
            .then(data => {
                this.setState({ users: data.members })
            });
    }

    componentDidMount() {
        this.getUserDetailsFromMockApi();
    }

    closeModal=()=>{
        if (this.state.showModal === false)
            this.setState({ showModal: true });
        else if (this.state.showModal === true)
            this.setState({ showModal: false });
    }

    toggleModal = (id) => {
        debugger;
        if (this.state.showModal === false)
            this.setState({ showModal: true });
        else if (this.state.showModal === true)
            this.setState({ showModal: false });

        let userDetails = this.state.users.filter((user) => id === user.id);
        this.setState({userData:userDetails[0]});
    }

    renderTd = () => {
        let tdDiv = this.state.users.map((user, index) => {
            return (
                <tr key={index}>
                    <td>{user.id}</td>
                    <td><a href="#activity" onClick={() =>this.toggleModal(user.id)}>{user.real_name}</a></td>
                    <td>{user.tz}</td>
                </tr>
            )
        });

        return tdDiv;
    }

    render() {

        return (
            < div className="user-table">
                <div className="main-div ">
                    
                    <table className="table table-striped">
                        <thead>
                            <tr className= "table-head">
                                <th>Id</th>
                                <th>Name</th>
                                <th>Time Zone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTd()}
                        </tbody>
                    </table>

                </div>

                <UserModal
                 openModal={this.state.showModal}
                 id={this.state.id}
                 userDetails={this.state.userData} 
                 closeModal={this.closeModal}
                />
            </ div>
        )

    }
}
export default UserTable;