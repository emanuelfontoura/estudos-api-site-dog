import React from "react";

const UserPost = () => {
    const [username, setUsername] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    function handleSubmit(e){
       e.preventDefault() 
       fetch('https://dogsapi.origamid.dev/json/api/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            email,
            password
        })
       }).then(resp => {
        console.log(resp)
        return resp.json()
       }).then(json => {
        console.log(json)
        return json
       })
    }

    return <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" value={username} onChange={({target}) => setUsername(target.value)} />
        <input type="email" placeholder="email" value={email} onChange={({target}) => setEmail(target.value)} />
        <input type="password" placeholder="password" value={password} onChange={({target}) => setPassword(target.value)} />
        <button>Enviar</button>
    </form>
}

export default UserPost