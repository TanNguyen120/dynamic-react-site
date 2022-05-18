import { GiImperialCrown } from 'react-icons/gi';

export default function ContactCard(prob) {
    return (
        <div className="contactCard">
            <div>
                <GiImperialCrown />
            </div>
            <img src={prob.data.img} alt="avatar" />
            <div className="contactInfo">
                <h2>{prob.data.name}</h2>
                <h3>{prob.data.faction}</h3>
                <p> {prob.data.type}</p>
                <p> {prob.data.purpose}</p>
            </div>
        </div>
    );
}