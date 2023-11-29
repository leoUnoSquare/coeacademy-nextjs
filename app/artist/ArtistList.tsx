import { fetchUsers } from "../data/fetchUsers";

export default async function ArtistList() {
    const data = await fetchUsers() as any;

    return (
        <div>
            {data.map((user: any) => (
                <div key={user.id} className="border p-2">
                    <h3>Name: {user.name}</h3>
                    <p>Email: {user.email}</p>
                </div>))
            }
        </div >
    );
}