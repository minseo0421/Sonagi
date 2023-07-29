import Button from '@/components/atoms/Button/Button';
import { Image } from '@/components/atoms/Image/Image';
import { BabyBarContainer } from '@/components/molecules/BabyBar/BabyBar.styles';
import babyCircleBlue from '@/assets/images/img-baby-blue-circle.png';

const BabyBar = () => {
  const BabyArray = ['이지은', '이지금'];

  return (
    <BabyBarContainer>
      {BabyArray.map((item, index) => (
        <Button
          variant="record"
          size="small"
          key={index}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <Image
            src={babyCircleBlue}
            width={1.5}
            style={{ transform: 'rotate(-10.68deg)', marginLeft: '2px' }}
          />
          {item}
        </Button>
      ))}
    </BabyBarContainer>
  );
};

export default BabyBar;