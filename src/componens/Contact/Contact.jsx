import css from './Contact.module.css';
import { FaUser, FaPhone } from 'react-icons/fa';

const Contact = ({contact, deleteContact }) => {
  return (
    <div className={css.contactItem}>
      <div className={css.contactInfo}>
        <span className={css.contactName}><FaUser className={css.icon} />  {contact.name}</span>
        <span className={css.contactNumber}><FaPhone className={css.icon} />{contact.number}</span>
      </div>
      <button className={css.deleteButton} onClick={() => deleteContact(contact.id)}>Delete</button>
    </div>
  );
};

export default Contact;


