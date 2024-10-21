import Layout from '../components/Layout/Layout';
import Slider from '../components/Slider/Slider';

const seo = {
  title: 'Arya Sports Academy – Welcome To Your Classroom',
  description: 'Arya Sports Academy is your classroom outside your classroom.',
};

function Institution() {
  return (
    <div>
      <Layout seo={seo}>
        <Slider title={'Coming Soon'} />
      </Layout>
    </div>
  );
}

export default Institution;
