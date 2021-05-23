import React,{useEffect,useState} from 'react'
// import Profile from './Profile'

//prop drilling...pass data to profile
function Dashboard(props) {
    const [name, setname] = useState('Ama')
    const [number, setnumber] = useState(0)
    
//1. useeffect is triiged whenever a state is chnged
    useEffect(() => {
        console.log('message 1');
    })

//2. this renders only once, cs it has empty dependency
    useEffect(() => {
        console.log('message 2')
    }, [])

// so triggered if the state variable in the array dependcy cahnges
   useEffect(() => {
    console.log('message 3')
   }, [name])

//    trigged if any(either or both) of the state variable in the array dependency changes
   useEffect(() => {
    console.log('message 4')
}, [name,number])

/*
  this triggered when the component is being unmounted
  ie..when the component is leaving/ a new state is about to start
*/
useEffect(() => {
    return()=>{
        console.log('message 5')
    }
})


    return (
        <>
        <h3>my dashboard</h3>
        <p>My username is:{name}<br/>
         password:{pass}</p>
        {/* <Profile name={name} pass={pass} /> */}
        </>
    )
}



export default Dashboard
