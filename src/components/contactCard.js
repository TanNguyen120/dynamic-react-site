export default function ContactCard({ name, text, type, img }) {
    return (
        <div className="contactCard">
            <img src={img} alt="avatar" />
            <div className="contactInfo">
                <h2>{name}</h2>
                <p> {text}</p>
                <p> {type}</p>
            </div>
        </div>
    );
}