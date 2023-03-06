import Iframe from 'react-iframe'
import Navbar from "../components/Navbar";


export default function CvPage() {
    return (<>
            <Navbar/>
            <Iframe url="/images/cv.pdf"
                    position="absolute"
                    width="100%"
                    id="myId"
                    className="myClassname"
                    height="100%"/>

        </>

    );
}