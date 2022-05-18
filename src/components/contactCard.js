export default function ContactCard(prob) {
    return (
        <div className="contactCard">
            <img src={prob.data.img} alt="avatar" />
            <div className="contactInfo">
                <h2>{prob.data.name}</h2>
                <p> {prob.data.type}</p>
            </div>
        </div>
    );
}