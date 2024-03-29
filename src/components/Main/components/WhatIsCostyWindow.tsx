import * as Styled from "./styles/whatIsCosty.styled";

const WhatIsCostyWindow: React.FC = () => {
  return (
    <Styled.WhatIsCosty>
      <span className="costy-title">რა არის ქოსთი</span>

      <div className="info-wrapper">
        <div className="info">
          <p>
            Costy - ის იდეა გაჩნდა 2021 წელს, მისი დამაარსებელია ოთარ დავითაძე,
            სამშენებლო ინდუსტრიაში 10 წლიანი გამოცდილების მქონე
            ინჟინერ-ეკონომისტი.
          </p>
          <p>
            ინოვაციური ტექნოლოგიური სტარტაპი Costy ცვლის არსებულ სამშენებლო
            ეკონომიკურ მიდგომებს ინდუსტრიაში. ჩვენ ვქმნით საშმენებლო
            კონტრაქტორების ქსელურ პლატფორმას, რომელიც მომხმარებელს სთავაზობს
            ისეთი სახის ინსტრუმენტებს, რომელიც ამატრივებს სამშენებლო პროექტების
            სასიცოცხო ციკლის წარმომქმნას.
          </p>
          <p>
            პლატფორმის საშუალებით შესაძლებელია სამშენებლო პროექტის ტექნიკური
            დავალების სწრაფად მომზადება ჩაშენებული ნიმუშების გამოყენებით,
            ელექტრონული ტენდერის გამოცხადება, სამშენებლო ხარჯთაღრიცხვის შედგენა
            და მიღებული წინადადების ავტომატიზირებული მეთოდით
            ტექნიკურ-ეკონომიკური ანალიზი.
          </p>
          <p>
            ქოსთის დახმარებით კონტრაქტორს შეუძლია ერთი პლატფორმის საშუალებით
            დამკვეთისა და ქვე-კონტრაქტორის მოძიება.
          </p>
          <p>
            ეს გამარტივებული პროცესები ზოგავს არა მხოლოდ დროს ასევე ხელს უწყობს
            გამჭირვალობას და ეფექტურობას სამშენებლო მრეწველობაში.
          </p>
        </div>
      </div>
    </Styled.WhatIsCosty>
  );
};

export default WhatIsCostyWindow;
