"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[2001],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),m=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=m(n),p=a,g=c["".concat(d,".").concat(p)]||c[p]||u[p]||l;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2453:function(e,t,n){n.r(t),n.d(t,{default:function(){return u},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return m}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={},d={unversionedId:"goctl/model",id:"goctl/model",isDocsHomePage:!1,title:"Model Commands",description:"goctl model is one of the components in the tool module under go-zero. It currently supports the recognition of mysql ddl for model layer code generation. It can be selectively generated with or without redis cache through the command line or idea plug-in (supported soon) The code logic.",source:"@site/docs/goctl/model.md",sourceDirName:"goctl",slug:"/goctl/model",permalink:"/docs/goctl/model",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/goctl/model.md",version:"current",lastUpdatedAt:1684493178,formattedLastUpdatedAt:"5/19/2023",frontMatter:{},sidebar:"goctl",previous:{title:"RPC Commands",permalink:"/docs/goctl/zrpc"},next:{title:"Plugin Commands",permalink:"/docs/goctl/plugin"}},m=[{value:"Quick start",id:"quick-start",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Generation rules",id:"generation-rules",children:[]},{value:"Cache",id:"cache",children:[]}],s={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"goctl model is one of the components in the tool module under go-zero. It currently supports the recognition of mysql ddl for model layer code generation. It can be selectively generated with or without redis cache through the command line or idea plug-in (supported soon) The code logic."),(0,l.kt)("h2",{id:"quick-start"},"Quick start"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Generated by ddl"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ goctl model mysql ddl -src="./*.sql" -dir="./sql/model" -c\n')),(0,l.kt)("p",{parentName:"li"},"CURD code can be quickly generated after executing the above command."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-text"},"model\n\u251c\u2500\u2500 usermodel.go\n\u251c\u2500\u2500 usermodel_gen.go\n\u2514\u2500\u2500 vars.go\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Generated by datasource"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ goctl model mysql datasource -url="user:password@tcp(127.0.0.1:3306)/database" -table="*"  -dir="./model"\n')))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"usermodel_gen.go")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-golang"},'// Code generated by goctl. DO NOT EDIT!\n\npackage model\n\nimport (\n    "context"\n    "database/sql"\n    "fmt"\n    "strings"\n    "time"\n\n    "github.com/zeromicro/go-zero/core/stores/builder"\n    "github.com/zeromicro/go-zero/core/stores/cache"\n    "github.com/zeromicro/go-zero/core/stores/sqlc"\n    "github.com/zeromicro/go-zero/core/stores/sqlx"\n    "github.com/zeromicro/go-zero/core/stringx"\n)\n\nvar (\n    userFieldNames          = builder.RawFieldNames(&User{})\n    userRows                = strings.Join(userFieldNames, ",")\n    userRowsExpectAutoSet   = strings.Join(stringx.Remove(userFieldNames, "`id`", "`create_time`", "`update_time`"), ",")\n    userRowsWithPlaceHolder = strings.Join(stringx.Remove(userFieldNames, "`id`", "`create_time`", "`update_time`"), "=?,") + "=?"\n\n    cacheUserIdPrefix     = "cache:user:id:"\n    cacheUserNumberPrefix = "cache:user:number:"\n)\n\ntype (\n    userModel interface {\n        Insert(ctx context.Context, data *User) (sql.Result, error)\n        FindOne(ctx context.Context, id int64) (*User, error)\n        FindOneByNumber(ctx context.Context, number string) (*User, error)\n        Update(ctx context.Context, data *User) error\n        Delete(ctx context.Context, id int64) error\n    }\n\n    defaultUserModel struct {\n        sqlc.CachedConn\n        table string\n    }\n\n    User struct {\n        Id         int64     `db:"id"`\n        Number     string    `db:"number"`   // \u5b66\u53f7\n        Name       string    `db:"name"`     // \u7528\u6237\u540d\u79f0\n        Password   string    `db:"password"` // \u7528\u6237\u5bc6\u7801\n        Gender     string    `db:"gender"`   // \u7537\uff5c\u5973\uff5c\u672a\u516c\u5f00\n        CreateTime time.Time `db:"create_time"`\n        UpdateTime time.Time `db:"update_time"`\n    }\n)\n\nfunc newUserModel(conn sqlx.SqlConn, c cache.CacheConf) *defaultUserModel {\n    return &defaultUserModel{\n        CachedConn: sqlc.NewConn(conn, c),\n        table:      "`user`",\n    }\n}\n\nfunc (m *defaultUserModel) Insert(ctx context.Context, data *User) (sql.Result, error) {\n    userIdKey := fmt.Sprintf("%s%v", cacheUserIdPrefix, data.Id)\n    userNumberKey := fmt.Sprintf("%s%v", cacheUserNumberPrefix, data.Number)\n    ret, err := m.ExecCtx(ctx, func(ctx context.Context, conn sqlx.SqlConn) (result sql.Result, err error) {\n        query := fmt.Sprintf("insert into %s (%s) values (?, ?, ?, ?)", m.table, userRowsExpectAutoSet)\n        return conn.ExecCtx(ctx, query, data.Number, data.Name, data.Password, data.Gender)\n    }, userIdKey, userNumberKey)\n    return ret, err\n}\n\nfunc (m *defaultUserModel) FindOne(ctx context.Context, id int64) (*User, error) {\n    userIdKey := fmt.Sprintf("%s%v", cacheUserIdPrefix, id)\n    var resp User\n    err := m.QueryRowCtx(ctx, &resp, userIdKey, func(ctx context.Context, conn sqlx.SqlConn, v interface{}) error {\n        query := fmt.Sprintf("select %s from %s where `id` = ? limit 1", userRows, m.table)\n        return conn.QueryRowCtx(ctx, v, query, id)\n    })\n    switch err {\n    case nil:\n        return &resp, nil\n    case sqlc.ErrNotFound:\n        return nil, ErrNotFound\n    default:\n        return nil, err\n    }\n}\n\nfunc (m *defaultUserModel) FindOneByNumber(ctx context.Context, number string) (*User, error) {\n    userNumberKey := fmt.Sprintf("%s%v", cacheUserNumberPrefix, number)\n    var resp User\n    err := m.QueryRowIndexCtx(ctx, &resp, userNumberKey, m.formatPrimary, func(ctx context.Context, conn sqlx.SqlConn, v interface{}) (i interface{}, e error) {\n        query := fmt.Sprintf("select %s from %s where `number` = ? limit 1", userRows, m.table)\n        if err := conn.QueryRowCtx(ctx, &resp, query, number); err != nil {\n            return nil, err\n        }\n        return resp.Id, nil\n    }, m.queryPrimary)\n    switch err {\n    case nil:\n        return &resp, nil\n    case sqlc.ErrNotFound:\n        return nil, ErrNotFound\n    default:\n        return nil, err\n    }\n}\n\nfunc (m *defaultUserModel) Update(ctx context.Context, data *User) error {\n    userIdKey := fmt.Sprintf("%s%v", cacheUserIdPrefix, data.Id)\n    userNumberKey := fmt.Sprintf("%s%v", cacheUserNumberPrefix, data.Number)\n    _, err := m.ExecCtx(ctx, func(ctx context.Context, conn sqlx.SqlConn) (result sql.Result, err error) {\n        query := fmt.Sprintf("update %s set %s where `id` = ?", m.table, userRowsWithPlaceHolder)\n        return conn.ExecCtx(ctx, query, data.Number, data.Name, data.Password, data.Gender, data.Id)\n    }, userIdKey, userNumberKey)\n    return err\n}\n\nfunc (m *defaultUserModel) Delete(ctx context.Context, id int64) error {\n    data, err := m.FindOne(ctx, id)\n    if err != nil {\n        return err\n    }\n\n    userIdKey := fmt.Sprintf("%s%v", cacheUserIdPrefix, id)\n    userNumberKey := fmt.Sprintf("%s%v", cacheUserNumberPrefix, data.Number)\n    _, err = m.ExecCtx(ctx, func(ctx context.Context, conn sqlx.SqlConn) (result sql.Result, err error) {\n        query := fmt.Sprintf("delete from %s where `id` = ?", m.table)\n        return conn.ExecCtx(ctx, query, id)\n    }, userIdKey, userNumberKey)\n    return err\n}\n\nfunc (m *defaultUserModel) formatPrimary(primary interface{}) string {\n    return fmt.Sprintf("%s%v", cacheUserIdPrefix, primary)\n}\n\nfunc (m *defaultUserModel) queryPrimary(ctx context.Context, conn sqlx.SqlConn, v, primary interface{}) error {\n    query := fmt.Sprintf("select %s from %s where `id` = ? limit 1", userRows, m.table)\n    return conn.QueryRowCtx(ctx, v, query, primary)\n}\n\nfunc (m *defaultUserModel) tableName() string {\n    return m.table\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"usermodel.go")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-golang"},'package model\n\nimport (\n    "github.com/zeromicro/go-zero/core/stores/cache"\n    "github.com/zeromicro/go-zero/core/stores/sqlx"\n)\n\nvar _ UserModel = (*customUserModel)(nil)\n\ntype (\n    // UserModel is an interface to be customized, add more methods here,\n    // and implement the added methods in customUserModel.\n    UserModel interface {\n        userModel\n    }\n\n    customUserModel struct {\n        *defaultUserModel\n    }\n)\n\n// NewUserModel returns a model for the database table.\nfunc NewUserModel(conn sqlx.SqlConn, c cache.CacheConf) UserModel {\n    return &customUserModel{\n        defaultUserModel: newUserModel(conn, c),\n    }\n}\n')),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"$ goctl model mysql -h\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'NAME:\n   goctl model mysql - generate mysql model"\n\nUSAGE:\n   goctl model mysql command [command options] [arguments...]\n\nCOMMANDS:\n   ddl         generate mysql model from ddl"\n   datasource  generate model from datasource"\n\nOPTIONS:\n   --help, -h  show help\n')),(0,l.kt)("h2",{id:"generation-rules"},"Generation rules"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Default rule"),(0,l.kt)("p",{parentName:"li"},"By default, users will create createTime and updateTime fields (ignoring case and underscore naming style) when creating a table, and the default values are both ",(0,l.kt)("inlineCode",{parentName:"p"},"CURRENT_TIMESTAMP"),", and updateTime supports ",(0,l.kt)("inlineCode",{parentName:"p"},"ON UPDATE CURRENT_TIMESTAMP"),". For these two fields, ",(0,l.kt)("inlineCode",{parentName:"p"},"insert"),", It will be removed when ",(0,l.kt)("inlineCode",{parentName:"p"},"update")," is not in the assignment scope. Of course, if you don't need these two fields, it does not matter.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"ddl"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"NAME:\n   goctl model mysql ddl - generate mysql model from ddl\n  \nUSAGE:\n   goctl model mysql ddl [command options] [arguments...]\n  \nOPTIONS:\n   --src value, -s value         the path or path globbing patterns of the ddl\n   --dir value, -d value         the target dir\n   --style value                 the file naming format, see [https://github.com/zeromicro/go-zero/tree/master/tools/goctl/config/readme.md]\n   --cache, -c                   generate code with cache [optional]\n   --idea                        for idea plugin [optional]\n   --database value, --db value  the name of database [optional]\n   --home value                  the goctl home path of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority\n   --remote value                the remote git repo of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority\n                                 The git repo directory must be consistent with the https://github.com/zeromicro/go-zero-template directory structure\n   --branch value                the branch of the remote repo, it does work with --remote\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"datasource"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ goctl model mysql datasource -h                       \uf64f 13:40:46  \ufa1e106ms\nNAME:\n   goctl model mysql datasource - generate model from datasource\n  \nUSAGE:\n   goctl model mysql datasource [command options] [arguments...]\n  \nOPTIONS:\n   --url value              the data source of database,like "root:password@tcp(127.0.0.1:3306)/database"\n   --table value, -t value  the table or table globbing patterns in the database\n   --cache, -c              generate code with cache [optional]\n   --dir value, -d value    the target dir\n   --style value            the file naming format, see [https://github.com/zeromicro/go-zero/tree/master/tools/goctl/config/readme.md]\n   --idea                   for idea plugin [optional]\n   --home value             the goctl home path of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority\n   --remote value           the remote git repo of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority\n                            The git repo directory must be consistent with the https://github.com/zeromicro/go-zero-template directory structure\n   --branch value           the branch of the remote repo, it does work with --remote\n')),(0,l.kt)("p",{parentName:"li"},"Generate code only basic CURD structure."))),(0,l.kt)("h2",{id:"cache"},"Cache"),(0,l.kt)("p",null,"For the cache, I chose to list it in the form of question and answer. I think this can more clearly describe the function of the cache in the model."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"What information will the cache?"),(0,l.kt)("p",{parentName:"li"},"For the primary key field cache, the entire structure information will be cached, while for the single index field (except full-text index), the primary key field value will be cached.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Does the data update (",(0,l.kt)("inlineCode",{parentName:"p"},"update"),") operation clear the cache?"),(0,l.kt)("p",{parentName:"li"},"Yes, but only clear the information in the primary key cache, why? I won't go into details here.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Why not generate ",(0,l.kt)("inlineCode",{parentName:"p"},"updateByXxx")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"deleteByXxx")," codes based on single index fields?"),(0,l.kt)("p",{parentName:"li"},"There is no problem in theory, but we believe that the data operations of the model layer are based on the entire structure, including queries. I do not recommend querying only certain fields (no objection), otherwise our cache will be meaningless.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Why not support the code generation layer of ",(0,l.kt)("inlineCode",{parentName:"p"},"findPageLimit")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"findAll"),"?"),(0,l.kt)("p",{parentName:"li"},"At present, I think that in addition to the basic CURD, the other codes are all ",(0,l.kt)("i",null,"business-type")," codes. I think it is better for developers to write according to business needs."))),(0,l.kt)("h1",{id:"type-conversion-rules"},"Type conversion rules"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"mysql dataType"),(0,l.kt)("th",{parentName:"tr",align:null},"golang dataType"),(0,l.kt)("th",{parentName:"tr",align:null},"golang dataType(if null&&default null)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullInt64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullInt64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tinyint"),(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullInt64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"smallint"),(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullInt64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mediumint"),(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullInt64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullInt64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullInt64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bigint"),(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullInt64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"float64"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullFloat64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"double"),(0,l.kt)("td",{parentName:"tr",align:null},"float64"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullFloat64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"decimal"),(0,l.kt)("td",{parentName:"tr",align:null},"float64"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullFloat64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"date"),(0,l.kt)("td",{parentName:"tr",align:null},"time.Time"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullTime")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"datetime"),(0,l.kt)("td",{parentName:"tr",align:null},"time.Time"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullTime")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,l.kt)("td",{parentName:"tr",align:null},"time.Time"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullTime")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"time"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullString")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"year"),(0,l.kt)("td",{parentName:"tr",align:null},"time.Time"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullInt64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"char"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullString")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"varchar"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullString")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"binary"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullString")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"varbinary"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullString")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tinytext"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullString")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullString")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mediumtext"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullString")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"longtext"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullString")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enum"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullString")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"set"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullString")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"json"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"sql.NullString")))))}u.isMDXComponent=!0}}]);