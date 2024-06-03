import { useState } from "react";
import { useActions } from "../hooks/actions";
import { useForm, SubmitHandler } from "react-hook-form";
import { MyFormData } from "../models/models";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useCreateCardMutation } from "../store/testApi";

const AddCard: React.FC = () => {
  const [photo, setPhoto] = useState();
  const { addCard } = useActions();
  const { register, handleSubmit } = useForm<MyFormData>();
  const navigate = useNavigate();
  const [createCard] = useCreateCardMutation();

  function loadPhoto(e) {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  const createNewCard: SubmitHandler<MyFormData> = async (data) => {
    data.image = photo!;
    data.id = Date.now();
    addCard(data);
    createCard(data);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(createNewCard)}>
      <div className="addCard">
        <input
          type="file"
          id="photo-input"
          hidden
          accept="image/*"
          onChange={loadPhoto}
        />
        {photo ? (
          <img src={photo} alt="" {...register("image")} />
        ) : (
          <label htmlFor="photo-input" className="addCard-photo">
            <PlusOutlined />
            Загрузить
          </label>
        )}

        <p>Имя</p>
        <input
          {...register("name")}
          type="text"
          placeholder="Введите имя"
          maxLength={10}
        />
        <p>Описание</p>
        <input
          {...register("description")}
          type="text"
          placeholder="Введите описание"
          maxLength={10}
        />
        <p>Стоимость</p>
        <input
          {...register("price")}
          type="number"
          placeholder="Введите стоимость"
          maxLength={10}
        />
        <button>Добавить</button>
      </div>
    </form>
  );
};

export default AddCard;
