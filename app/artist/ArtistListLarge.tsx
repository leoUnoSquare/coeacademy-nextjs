import { fetchUsers2 } from "../data/fetchUsers";

export default async function ArtistListLarge() {
    const data = await fetchUsers2() as any;

    return (
        <div>
            {data.map((user: any) => (
                <div key={user.id} className="border p-2">
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                </div>))}
        </div>
    );
}