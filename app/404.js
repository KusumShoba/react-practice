import Link from "next/link";


const NotFound=() =>
 { 
    return (
        <div className="not-found">
            <h1>Oops</h1>
            <p>go to<Link href="/"><a>Homepage</a></Link></p>
        </div>

    );

  }  

export default NotFound;