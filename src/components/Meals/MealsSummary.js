import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        좋아하는 음식을 선택하고 장바구니에 넣어보세요!
      </p>
      <p>
        경험많은 요리사가 최상의 재료들로 요리를 준비합니다.
      </p>
    </section>
  );
};

export default MealsSummary;
