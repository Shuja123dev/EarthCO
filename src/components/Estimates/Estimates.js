import EstimateTR from './EstimateTR'
import './Estimates.css'
import { useContext, useEffect, useState } from 'react'
import StatusCardsEst from './StatusCardsEst'
import { DataContext } from '../../context/AppData'
import { RoutingContext } from '../../context/RoutesContext'
import { Form } from 'react-bootstrap'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'

const Estimates = () => {

    const { estimates, setSingleObj } = useContext(DataContext);
    const { setEstimateRoute } = useContext(RoutingContext);

    const [customers, setCustomers] = useState([]);
    const [selectedCustomer, setSelectCustomer] = useState({})

    const [customer, setCustomer] = useState('Select Customer');
    const [serviceLocation, setServiceLocation] = useState('Select Customer First');
    const [locationLabel, setLocationLabel] = useState('Select Customer First...')
    const [opacity, setOpacity] = useState('50%');

    const navigate = useNavigate();

    const getUsers = async () => {
        const response = await axios.get('http://localhost:8001/Customers');
        setCustomers(response.data)
    }

    useEffect(() => {
        getUsers();
    }, [])

    useEffect(() => {
        if (customer !== 'Select Customer' && serviceLocation !== 'Select Customer First') {
            setOpacity('100%')
        }
        else {
            setOpacity('50%')
        }
    }, [serviceLocation, customer])


    const popUpData = customers.map((object) => {
        return {
            name: object.customerName,
            locations: object.serviceLocations
        }
    })

    const handleCatClick = (type, id) => {
        setEstimateRoute(type);
        const updatedArr = estimates.filter((object) => {
            if (id === object.estimateID) {
                return object;
            }
            return null
        });
        setSingleObj(updatedArr);
    }

    const customerOptions = popUpData.map((item, index) => {
        return <option key={index} value={item.name}>{item.name}</option>
    })

    const openModal = () => {
    }

    const handleSelectCustomer = (name) => {
        const updatedArr = popUpData.filter((object) => {
            if (object.name === name) {
                return object;
            }
            return null
        })
        setSelectCustomer(updatedArr[0] || [])
        setServiceLocation('Select Customer First')
    }

    const handleChangeCustomer = (e) => {
        setCustomer(e.target.value);
        handleSelectCustomer(e.target.value);
        if (e.target.value === 'Select Customer')
            setLocationLabel('Select Customer First...')
        else
            setLocationLabel('Select Service Location...')
    }

    const goToAddEst = () => {
        if (customer !== 'Select Customer' && serviceLocation !== 'Select Customer First') {
            document.getElementById('closer').click();
            navigate('/Dashboard/Estimates/Add-Estimate');
        }
    }

    const saveAddEstPop = () => {

    }

    const renderedRecords = estimates.map((object, index) => {
        return <EstimateTR key={object.estimateID} index={index} onClick={() => handleCatClick(`Estimate${object.estimateID}`, object.estimateID)} estimate={object} />
    });

    return (
        <div className="container-fluid">
            <div className="row">
                <StatusCardsEst drafts={28102} sent={7089} approved={4576} rejected={145} total={39912} />
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="tbl-caption">
                                <div className="row p-3 ">
                                    <div className="col-md-3">
                                        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#basicModal" onClick={openModal}>+ Add Estimates</button>
                                    </div>
                                    <div className="col-md-7">
                                        <div>
                                            <input className="from-control form-control-sm" style={{ width: '100%' }} type="text" placeholder="Default input" />
                                        </div>
                                    </div>
                                    <div className="col-md-2" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                                        <div className="col-md-12">
                                            <Form.Select aria-label="Default select example" size="md">
                                                <option>All</option>
                                                <option value="1">Current Month</option>
                                                <option value="2">Previous Month</option>
                                            </Form.Select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive active-projects style-1">
                                <table id="empoloyees-tblwrapper" className="table">
                                    <thead>
                                        <tr>
                                            <th>
                                                #
                                            </th>
                                            <th>Customer Name</th>
                                            <th>Assign to</th>
                                            <th>Estimate Number</th>
                                            <th>Estimate Amount</th>
                                            <th>Description of Work </th>
                                            <th>Date Created</th>
                                            <th>Status</th>
                                            <th>QB Status</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {renderedRecords}
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* modal */}
            <div className="modal fade" id="basicModal">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Estimate</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal">
                            </button>
                        </div>
                        <form onSubmit={saveAddEstPop}>
                            <div className="modal-body">
                                <div className="basic-form">
                                    <div className="mb-3 row">
                                        <label className="col-sm-3 col-form-label">Customer</label>
                                        <div className="col-sm-9">
                                            <Form.Select aria-label="Default select example" size="md" value={customer} onChange={handleChangeCustomer} id="inlineFormCustomSelect">
                                                <option value='Select Customer'>Select Customer...</option>
                                                {customerOptions}
                                            </Form.Select>
                                            {/* <select className="me-sm-2 default-select form-control wide" value={customer} onChange={handleChangeCustomer} id="inlineFormCustomSelect">
                                                <option value='Select Customer'>Select Customer...</option>
                                                {customerOptions}
                                            </select> */}
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label className="col-sm-3 col-form-label">Service Location</label>
                                        <div className="col-sm-9">
                                            <Form.Select aria-label="Default select example" size="md" value={serviceLocation} onChange={(e) => setServiceLocation(e.target.value)} id="inlineFormCustomSelect">
                                                <option value="Select Customer First">{locationLabel}</option>
                                                {selectedCustomer.locations && selectedCustomer.locations.map((location, index) => {
                                                    return <option key={index} value={location.name}>{location.name}</option>
                                                })}
                                            </Form.Select>
                                            {/* <select className="me-sm-2 default-select form-control wide" value={serviceLocation} onChange={(e) => setServiceLocation(e.target.value)} id="inlineFormCustomSelect">
                                                <option value="Select Customer First">Select Customer First...</option>
                                                {locationOptions}
                                            </select> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" id='closer' className="btn btn-danger light" data-bs-dismiss="modal">Close</button>
                                {/* <NavLink to='/Dashboard/Estimates/Add-Estimate'> */}
                                <button type="button" onClick={goToAddEst} style={{ opacity: opacity }} className="btn btn-primary">Save</button>
                                {/* </NavLink> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Estimates
