import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const activity_periods = [
    {
        title: 'Today',
        start: new Date(new Date().setHours(new Date().getHours() - 3)),
        end: new Date(new Date().setHours(new Date().getHours() + 3)),
    },
    {
        title: 'Point in Time Event',
        start: new Date(),
        end: new Date(),
    },
]

class UserModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activity_periods
        }
    }

    render() {


        return (

            <>
                <Modal isOpen={this.props.openModal} toggle={this.props.closeModal}>
                    <ModalHeader toggle={this.props.closeModal}><h2 className="text-center font-weight-bold"> Activity Details</h2></ModalHeader>
                    <ModalBody>

                        <h4 className="text-center font-weight-bold">{this.props.userDetails.real_name}</h4>
                        <Calendar
                            localizer={localizer}
                            events={this.state.activity_periods}
                            startAccessor="start"
                            endAccessor="end"
                            style={{ height: 500 }}
                        />
                        {/* <Calendar
                            localizer={localizer}
                            events={this.props.userDetails.activity_periods}
                            startAccessor="start"
                            endAccessor="end"
                            style={{ height: 500 }}
                        /> */}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.props.closeModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </>

        )
    }
}

export default UserModal;