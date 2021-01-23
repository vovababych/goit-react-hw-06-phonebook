import DecorContainer from './components/DecorContainer';
import ContactForm from './components/ContactForm';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';

function App() {
  return (
    <>
      <DecorContainer title={'Телефонная книга'}>
        <ContactForm />
      </DecorContainer>
      <DecorContainer title="Список контактов">
        <Filter />
        <ContactsList />
      </DecorContainer>
    </>
  );
}

export default App;
