var db = require('../fn/db');

exports.loadAll = () => {
    var sql = 'select * from CHITIETDONHANG';
    return db.load(sql);
}

exports.single = (oID, pID) => {
    return new Promise((resolve, reject) => {
        var sql = `select * from CHITIETDONHANG where MaDon = ${oID} and MaSP = ${pID}`;
        db.load(sql).then(rows => {
            if (rows.length === 0) {
                resolve(null);
            } else {
                resolve(rows[0]);
            }
        }).catch(err => {
            reject(err);
        });
    });
}

exports.add = (c) => {
    var sql = `insert into CHITIETDONHANG(MaDon,MaSP,SoLuong) values(${c.MaDon},${c.MaSP},${c.SoLuong})`;
    return db.save(sql);
}

exports.delete = (id) => {
    var sql = `delete from CHITIETDONHANG where MaDon = ${id}`;
    return db.save(sql);
}

exports.update = (c) => {
    var sql = `update CHITIETDONHANG set CatName = '${c.CatName}' where CatID = ${c.CatId}`;
    return db.save(sql);
}