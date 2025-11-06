import { useState, useEffect } from "react";

export default function TrackingData() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://file.garden/aFLA3HQurBbOEIEj/packagedata.json")
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
                        {data.map(item => {
                            let eta = new Date(item.eta);
                            let updated = new Date(item.last_updated);
                            return (
                                <tr>
                                    <td>{item.parcel_id}</td>
                                    <td>{item.sender}</td>
                                    <td>{item.status}</td>
                                    <td>{eta.toLocaleDateString()} <br /> {eta.toLocaleTimeString()}</td>
                                    <td>{item.verification_required ? "Yes" : "No"}</td>
                                    <td>{item.location_name}</td>
                                    <td>{item.notes}</td>
                                    <td>{updated.toLocaleDateString()} <br /> {updated.toLocaleTimeString()}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            ) : (
                <h3>Loading...</h3>
            )}
        </div>
    );
}