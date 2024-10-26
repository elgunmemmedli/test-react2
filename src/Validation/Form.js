import * as yup from 'yup';

let formSchema = yup.object().shape({
  email: yup.string().email('Email kecerli email olmalidir').required('Bu xananı doldurun'),
  password: yup.string().min(8,'Minimum 8 işarədən ibarət olmalıdır!').max(15,'Max 15').required('Bu xananı doldurun'),

});

export default formSchema