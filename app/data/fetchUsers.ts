export async function fetchUsers() {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    return await data.json()
}
export async function fetchUsers2() {
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    name: 'Alex Doe',
                    username: 'alexdoe',
                    email: ''
                },
                {
                    id: 2,
                    name: 'Jane Doe',
                    username: 'janedoe',
                    email: ''
                },
                {
                    id: 3,
                    name: 'John Smith',
                    username: 'johnsmith',
                    email: ''
                },
            ])
        }, 5000)
    })
}