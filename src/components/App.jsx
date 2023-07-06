import React from 'react';
import { useState } from 'react';
import { Section } from 'components/section/Section';
import { FeedbackOptions } from 'components/feedbackoptions/FeedbackOptions';
import { Notification } from 'components/notification/Notification';
import { Statistics } from 'components/statistics/Statistics';
import css from './App.module.css';
const options = ['Good', 'Neutral', 'Bad'];

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    const total = countTotalFeedback();
    if (total === 0) {
      return 0;
    } else {
      return Math.round((good / total) * 100);
    }
  }

  const handlAddGood = evt => {
    setGood(good + 1);
  };

  const handlAddNeutral = evt => {
    setNeutral(neutral + 1);
  };

  const handlAddBad = evt => {
    setBad(bad + 1);
  };

  return (
    <div
      className={css.app_holder}
      // style={{
      //   // height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   flexDirection: 'column',
      //   alignItems: 'flex-start',
      //   fontSize: 40,
      //   color: '#010101',
      // }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={[handlAddGood, handlAddNeutral, handlAddBad]}
        />
        <h1 className={css.app_stattitle}>Statistics</h1>
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
};

// Widget odpowiedzi
// Utworzone repozytorium goit-react-hw-04-feedback.
// Przeprowadź refaktor kodu zadania «Widget odpowiedzi», wykorzystując hooki React.

// 1 - Widget odpowiedzi
// Jak większość firm, kawiarnia Expresso zbiera feedback od swoich klientów. Twoim zadaniem jest stworzenie aplikacji dla zbierania statystyk. Są tylko trzy warianty odpowiedzi: dobry, neutralny, zły.

// Krok 1
// Aplikacja powinna wyświetlać ilość zebranych odpowiedzi dla każdej kategorii. Aplikacja nie powinna przechowywać statystyk odpowiedzi między różnymi sesjami (odświeżenie strony).

// Stan aplikacji obowiązkowo powinien wyglądać następująco, nie można dodawać nowych właściwości:

// state = {
//   good: 0,
//   neutral: 0,
//   bad: 0
// }

// Interfejs może wyglądać tak:

// Krok 2
// Rozszerz funkcjonalność aplikacji tak, aby w interfejsie wyświetlało się więcej statystyk o zebranych odpowiedziach. Dodaj wyświetlanie ogólnej ilości zebranych odpowiedzi ze wszystkich kategorii i procent pozytywnych odpowiedzi. W tym celu utwórz metody pomocnicze countTotalFeedback() i countPositiveFeedbackPercentage() podliczające te wartości, bazując na danych w stanie (obliczane dane).

// Krok 3
// Wykonaj refaktor aplikacji. Stan aplikacji powinien zostawać w komponencie root <App>.

// Przenieś wyświetlanie statystyk do oddzielnego komponentu <Statistics good={} neutral={} bad={} total={} positivePercentage={}>.
// Przenieś blok przycisków do komponentu <FeedbackOptions options={} onLeaveFeedback={}>.
// Utwórz komponent <Section title="">, który renderuje sekcję z nagłówkiem i dziećmi (children). Zamień każdy z <Statistics> i <FeedbackOptions> w utworzony komponent sekcji.

// Krok 4
// Rozszerz funkcjonalność aplikacji tak, aby blok statystyk renderował się dopiero po otrzymaniu przynajmniej jednej odpowiedzi. Wiadomość o braku statystyk przenieś do komponentu <Notification message="There is no feedback">.
