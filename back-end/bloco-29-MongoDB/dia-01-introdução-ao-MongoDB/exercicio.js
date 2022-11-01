use 'biosDB';

db.bios.find({ _id: 8 });

db.bios.find({ _id: 8 }, { _id: 1, name: 1 });

db.bios.find({ _id: 8 }, { name: 1, birth: 1 });

db.bios.find({ "name.first": "John" }).pretty();

db.bios.find({}).limit(3).pretty();

db.bios.find().skip(5).limit(2).pretty();

use 'bookDB';

db.book.find().count();

db.book.find({ status: "PUBLISH" }).count();

db.book.find({}, { title: 1, isbn: 1, pageCount: 1, _id: 0 }).limit(3);

db.book.find({ status: "MEAP" }, { title: 1, status: 1, authors: 1, _id: 1 }).skip(5).limit(10);