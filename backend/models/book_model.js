import mongoose, { mongo } from "mongoose";

const bookSchemna = mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    Image: String,
    title: String,
});

const Book = mongoose.model("Book", bookSchemna);
export default Book;