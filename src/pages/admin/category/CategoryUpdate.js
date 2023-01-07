import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { getCategory, updateCategory } from "../../../functions/category";
import { useNavigate, useParams } from "react-router-dom";
import CategoryForm from "../../../components/forms/CategoryForm";

const CategoryUpdate = () => {
  const history = useNavigate();
  const redirect = (path) => {
    history(path);
  };
  const { user } = useSelector((state) => ({ ...state }));
  const { slug } = useParams();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadCategory();
  }, []);

  const loadCategory = () =>
    getCategory(slug).then((c) => setName(c.data.name));

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name);
    setLoading(true);
    updateCategory(slug, { name }, user.token)
      .then((res) => {
        // console.log(res)
        setLoading(false);
        setName("");
        toast.success(`"${res.data.name}" is updated`);
        redirect("/admin/category");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        if (err.response.status === 400) toast.error(err.response.data);
      });
  };

  const categoryForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setName(e.target.value)}
          value={name}
          autoFocus
          required
        />
        <br />
        <button className="btn btn-outline-primary">حفظ</button>
      </div>
    </form>
  );

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col">
          {loading ? (
            <h4 className="text-danger">جاري التحميل..</h4>
          ) : (
            <h4>Update category</h4>
          )}

          <CategoryForm
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
          />

          <hr />
        </div>
      </div>
    </div>
  );
};

export default CategoryUpdate;
