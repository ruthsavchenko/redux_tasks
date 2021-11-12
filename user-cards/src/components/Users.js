import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actionGetData } from './store/actions';

export const Users = () => {
    const [show, setShow] = useState(false)
    const dispatch = useDispatch()
    const users = useSelector((state => state.users)) 

    const handleShow = () => {
        setShow(false)
    }

    const getData = (data) => {
        dispatch(actionGetData(data))
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                getData(data);
                console.log(data)
                setShow(true)
            })
            .catch(error => console.error(error))
    }, []);

    console.log(users)

    return (
        <>
            {show ? (
                <button onClick={handleShow}>Get Data</button>
            ) : (
                <div className="container">
                    {
                        users && users.length > 0 && users.map((user) =>
                            <div key={user.id} className="user-card">
                                <h2>{user.name}</h2>
                                <p>Username: {user.username}</p>
                                <p>Email: {user.email}</p>
                                <div className="user-card__address">
                                    <h4>Address:</h4>
                                    <p>{user.address.street} street, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
                                    <div>
                                        <p>Coordinates: {user.address.geo.lat}, {user.address.geo.lng}</p>
                                    </div>
                                </div>
                                <p>Phone: {user.phone}</p>
                                <p>Website: <a href="{user.website}">{user.website}</a></p>
                                <div className="user-card__company">
                                    <h4>Company:</h4>
                                    <p>"{user.company.name}"</p>
                                    <p>Catch phrase: {user.company.catchPhrase}</p>
                                    <p>{user.company.bs}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            )} 
        </>
    )
}

export default Users
