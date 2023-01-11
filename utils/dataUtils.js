import supabase from '../lib/supabaseClient';

export const addData = async ({
  firstName, lastName, email, message,
}) => {
  const { data } = await supabase
    .from('contacts')
    .insert([
      {
        first_name: firstName, last_name: lastName, email, message,
      },
    ]);
};

export const getData = async (setMyData) => {
  const { data: contacts, error } = await supabase.from('contacts').select('*');
  if (error) console.log('error', error);
  else setMyData(contacts);
};
