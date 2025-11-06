import { useState, useEffect } from "react";

export default function TrackingData() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://my.api.mockaroo.com/orders.json?key=e49e6840")
            .then(response => response.json())
            .then(responseData => setData(responseData))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="dataTable">
            {data ? (
                <table>
                    <thead>
                        <tr>
                            <th>Parcel ID</th>
                            <th>Sender</th>
                            <th>Status</th>
                            <th>Estimated Delivery</th>
                            <th>Requires Verification</th>
                            <th>Location</th>
                            <th>Notes</th>
                            <th>Last Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr>
                                <td>{item.parcel_id}</td>
                                <td>{item.sender}</td>
                                <td>{item.status}</td>
                                <td>{item.eta}</td>
                                <td>{item.verification_required ? "Yes" : "No"}</td>
                                <td>{item.location_name}</td>
                                <td>{item.notes}</td>
                                <td>{item.last_updated}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <h3>Loading...</h3>
            )}
        </div>
    );
}