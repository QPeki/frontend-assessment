import SButton from "./SButton";
import { useState } from 'react';

function Card(props) {
    const [supportCode, setSupportCode] = useState();
    const getSupportCode = () => {
        // console.log('call')

        // fetch('https://openapi-mock-server.eu-stag.holodeck.wearespindle.com/mock/main/support_code/clients/1/support_codes/')
        //     .then(response => response.json())
        //     .then(data => console.log(data));

        //Normaly this would be set to data.support_code

        setSupportCode('12345')
    }
    return (
        <div

            className="card w-full border-2 border-gray-300"
        >
            <div className="flex items-center justify-between p-3">
                <SButton buttonType="button" buttonText="Create code" fetchSupportCode={getSupportCode} />
                {supportCode ? (
                    <div>{supportCode}</div>
                ) :
                (
                    <div ><abbr title="Some information here...">Wat is this?</abbr></div>)}
            </div>

        </div>
    );
}

export default Card;
