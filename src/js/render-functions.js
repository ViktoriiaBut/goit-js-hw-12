let formData = {
    email: '',
    message: '',
  };
  
  const form = document.querySelector('.feedback-form');
  
  // От0слеживание изменений в форме и избережении даних в локальном хранилище
  form.addEventListener('input', event => {
    const { name, value } = event.target;
    formData[name] = value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  });
  
  // Загрузка данних с локального хранилищаs при загрузке странички
  const storedData = localStorage.getItem('feedback-form-state');
  console.log(storedData);
  
  if (storedData) {
    const parsedData = JSON.parse(storedData);
    console.log(parsedData);
    formData = parsedData;
    form.elements.email.value = parsedData.email;
    form.elements.message.value = parsedData.message;
  }
  
  // Оброботка отправки форми
  form.addEventListener('submit', event => {
    event.preventDefault();
  
    // Валидация данних
    if (!formData.email || !formData.message) {
      alert('Fill please all fields');
      return;
    }
  
    // Очи0стка данних
    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
    form.reset();
  });