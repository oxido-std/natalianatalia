use serde::Deserialize;

#[derive(Debug,serde::Serialize)]
pub struct Script{
    pub id:i64,
    pub name:String,
    pub created_at:String,
    pub updated_at:String,
    pub is_deleted:bool,
}

#[derive(Debug,serde::Serialize,serde::Deserialize)]
pub struct Rule{
    pub name:String,
    pub comment:String,
    pub args:String,
}

#[derive(Debug,serde::Serialize,serde::Deserialize)]
pub struct ExecRule{
    pub name:String,
    pub path:String,
    pub comment:String,
    pub date:String,
    pub rules:Vec<Rule>,
}

pub trait SQLScript {
    fn get_query_insert() -> String{
        format!("INSERT INTO scripts (name,created_at,updated_at,is_deleted) VALUES (?1,datetime('now'),datetime('now'),false)")
    }

    fn get_query_update(id:u32) -> String{
        format!("UPDATE scripts SET name=?1, updated_at=datetime('now') WHERE id={}",id)
    }

    fn get_query_delete(id:u32) -> String{
        format!("UPDATE scripts SET is_deleted=1, updated_at=datetime('now') WHERE id={}",id)
    }
}

impl SQLScript for Script{

}

#[derive(Debug,Deserialize)]
pub struct DtoScript{
    pub name:String, 
}