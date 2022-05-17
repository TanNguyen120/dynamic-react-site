export default function ContactCard(prob) {
    return (
        <div className="contactCard">
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
            <div className="contactInfo">
                <h2>{prob.name}</h2>
                <p> {prob.text}</p>
                <p> {prob.type}</p>
            </div>
        </div>
    );
}