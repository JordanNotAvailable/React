

const Landing = () => {
    return (
        <p>
            Already have an account?<br />
            <span className="line">
                {/*put router link here*/}
                <a href="./Signin">Sign In</a>
            </span>
        </p>,

        <p> Dont have an account?<br />
            <span className="line">
                {/*put router link here*/}
                <a href="./Register">Creat account</a>
            </span>
        </p>
)}

export default Landing