// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('three_body.core');
goog.require('cljs.core');
three_body.core.debug = false;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
three_body.core.Body = (function (id,x,y,vx,vy,ax,ay,out,__meta,__extmap,__hash){
this.id = id;
this.x = x;
this.y = y;
this.vx = vx;
this.vy = vy;
this.ax = ax;
this.ay = ay;
this.out = out;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(three_body.core.Body.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(three_body.core.Body.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k27919,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__27923 = k27919;
var G__27923__$1 = (((G__27923 instanceof cljs.core.Keyword))?G__27923.fqn:null);
switch (G__27923__$1) {
case "id":
return self__.id;

break;
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
case "vx":
return self__.vx;

break;
case "vy":
return self__.vy;

break;
case "ax":
return self__.ax;

break;
case "ay":
return self__.ay;

break;
case "out":
return self__.out;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27919,else__4383__auto__);

}
}));

(three_body.core.Body.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__27924){
var vec__27925 = p__27924;
var k__4403__auto__ = cljs.core.nth.call(null,vec__27925,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__27925,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(three_body.core.Body.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#three-body.core.Body{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vx","vx",-1685168462),self__.vx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vy","vy",-2018509997),self__.vy],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ax","ax",-1516070907),self__.ax],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ay","ay",-1860044923),self__.ay],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"out","out",-910545517),self__.out],null))], null),self__.__extmap));
}));

(three_body.core.Body.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27918){
var self__ = this;
var G__27918__$1 = this;
return (new cljs.core.RecordIter((0),G__27918__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"vx","vx",-1685168462),new cljs.core.Keyword(null,"vy","vy",-2018509997),new cljs.core.Keyword(null,"ax","ax",-1516070907),new cljs.core.Keyword(null,"ay","ay",-1860044923),new cljs.core.Keyword(null,"out","out",-910545517)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(three_body.core.Body.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(three_body.core.Body.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new three_body.core.Body(self__.id,self__.x,self__.y,self__.vx,self__.vy,self__.ax,self__.ay,self__.out,self__.__meta,self__.__extmap,self__.__hash));
}));

(three_body.core.Body.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (8 + cljs.core.count.call(null,self__.__extmap));
}));

(three_body.core.Body.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1232038467 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(three_body.core.Body.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27920,other27921){
var self__ = this;
var this27920__$1 = this;
return (((!((other27921 == null)))) && ((this27920__$1.constructor === other27921.constructor)) && (cljs.core._EQ_.call(null,this27920__$1.id,other27921.id)) && (cljs.core._EQ_.call(null,this27920__$1.x,other27921.x)) && (cljs.core._EQ_.call(null,this27920__$1.y,other27921.y)) && (cljs.core._EQ_.call(null,this27920__$1.vx,other27921.vx)) && (cljs.core._EQ_.call(null,this27920__$1.vy,other27921.vy)) && (cljs.core._EQ_.call(null,this27920__$1.ax,other27921.ax)) && (cljs.core._EQ_.call(null,this27920__$1.ay,other27921.ay)) && (cljs.core._EQ_.call(null,this27920__$1.out,other27921.out)) && (cljs.core._EQ_.call(null,this27920__$1.__extmap,other27921.__extmap)));
}));

(three_body.core.Body.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"ax","ax",-1516070907),null,new cljs.core.Keyword(null,"ay","ay",-1860044923),null,new cljs.core.Keyword(null,"vx","vx",-1685168462),null,new cljs.core.Keyword(null,"out","out",-910545517),null,new cljs.core.Keyword(null,"vy","vy",-2018509997),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new three_body.core.Body(self__.id,self__.x,self__.y,self__.vx,self__.vy,self__.ax,self__.ay,self__.out,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(three_body.core.Body.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__27918){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__27928 = cljs.core.keyword_identical_QMARK_;
var expr__27929 = k__4388__auto__;
if(cljs.core.truth_(pred__27928.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__27929))){
return (new three_body.core.Body(G__27918,self__.x,self__.y,self__.vx,self__.vy,self__.ax,self__.ay,self__.out,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27928.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__27929))){
return (new three_body.core.Body(self__.id,G__27918,self__.y,self__.vx,self__.vy,self__.ax,self__.ay,self__.out,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27928.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__27929))){
return (new three_body.core.Body(self__.id,self__.x,G__27918,self__.vx,self__.vy,self__.ax,self__.ay,self__.out,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27928.call(null,new cljs.core.Keyword(null,"vx","vx",-1685168462),expr__27929))){
return (new three_body.core.Body(self__.id,self__.x,self__.y,G__27918,self__.vy,self__.ax,self__.ay,self__.out,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27928.call(null,new cljs.core.Keyword(null,"vy","vy",-2018509997),expr__27929))){
return (new three_body.core.Body(self__.id,self__.x,self__.y,self__.vx,G__27918,self__.ax,self__.ay,self__.out,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27928.call(null,new cljs.core.Keyword(null,"ax","ax",-1516070907),expr__27929))){
return (new three_body.core.Body(self__.id,self__.x,self__.y,self__.vx,self__.vy,G__27918,self__.ay,self__.out,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27928.call(null,new cljs.core.Keyword(null,"ay","ay",-1860044923),expr__27929))){
return (new three_body.core.Body(self__.id,self__.x,self__.y,self__.vx,self__.vy,self__.ax,G__27918,self__.out,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27928.call(null,new cljs.core.Keyword(null,"out","out",-910545517),expr__27929))){
return (new three_body.core.Body(self__.id,self__.x,self__.y,self__.vx,self__.vy,self__.ax,self__.ay,G__27918,self__.__meta,self__.__extmap,null));
} else {
return (new three_body.core.Body(self__.id,self__.x,self__.y,self__.vx,self__.vy,self__.ax,self__.ay,self__.out,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__27918),null));
}
}
}
}
}
}
}
}
}));

(three_body.core.Body.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"vx","vx",-1685168462),self__.vx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"vy","vy",-2018509997),self__.vy,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ax","ax",-1516070907),self__.ax,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ay","ay",-1860044923),self__.ay,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"out","out",-910545517),self__.out,null))], null),self__.__extmap));
}));

(three_body.core.Body.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__27918){
var self__ = this;
var this__4379__auto____$1 = this;
return (new three_body.core.Body(self__.id,self__.x,self__.y,self__.vx,self__.vy,self__.ax,self__.ay,self__.out,G__27918,self__.__extmap,self__.__hash));
}));

(three_body.core.Body.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(three_body.core.Body.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"vx","vx",-44636935,null),new cljs.core.Symbol(null,"vy","vy",-377978470,null),new cljs.core.Symbol(null,"ax","ax",124460620,null),new cljs.core.Symbol(null,"ay","ay",-219513396,null),new cljs.core.Symbol(null,"out","out",729986010,null)], null);
}));

(three_body.core.Body.cljs$lang$type = true);

(three_body.core.Body.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"three-body.core/Body",null,(1),null));
}));

(three_body.core.Body.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"three-body.core/Body");
}));

/**
 * Positional factory function for three-body.core/Body.
 */
three_body.core.__GT_Body = (function three_body$core$__GT_Body(id,x,y,vx,vy,ax,ay,out){
return (new three_body.core.Body(id,x,y,vx,vy,ax,ay,out,null,null,null));
});

/**
 * Factory function for three-body.core/Body, taking a map of keywords to field values.
 */
three_body.core.map__GT_Body = (function three_body$core$map__GT_Body(G__27922){
var extmap__4419__auto__ = (function (){var G__27931 = cljs.core.dissoc.call(null,G__27922,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"vx","vx",-1685168462),new cljs.core.Keyword(null,"vy","vy",-2018509997),new cljs.core.Keyword(null,"ax","ax",-1516070907),new cljs.core.Keyword(null,"ay","ay",-1860044923),new cljs.core.Keyword(null,"out","out",-910545517));
if(cljs.core.record_QMARK_.call(null,G__27922)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__27931);
} else {
return G__27931;
}
})();
return (new three_body.core.Body(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__27922),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__27922),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__27922),new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(G__27922),new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(G__27922),new cljs.core.Keyword(null,"ax","ax",-1516070907).cljs$core$IFn$_invoke$arity$1(G__27922),new cljs.core.Keyword(null,"ay","ay",-1860044923).cljs$core$IFn$_invoke$arity$1(G__27922),new cljs.core.Keyword(null,"out","out",-910545517).cljs$core$IFn$_invoke$arity$1(G__27922),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});

three_body.core.start_time = (1000);
three_body.core.min_boundary = (0);
three_body.core.max_boundary = (100);
three_body.core.max_time_step = (50);
three_body.core.offset = (10);
three_body.core.rand_x = (function three_body$core$rand_x(){
return ((three_body.core.offset + three_body.core.min_boundary) + cljs.core.rand_int.call(null,(three_body.core.max_boundary - ((2) * three_body.core.offset))));
});
three_body.core.body = (function three_body$core$body(id){
return (new three_body.core.Body(id,three_body.core.rand_x.call(null),three_body.core.rand_x.call(null),(0),(0),(0),(0),false,null,null,null));
});
three_body.core.init_bodies = (function three_body$core$init_bodies(n){
return cljs.core.map.call(null,(function (id){
return three_body.core.body.call(null,((1) + id));
}),cljs.core.range.call(null,n));
});
three_body.core.comb = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null);
three_body.core.prev_ts = cljs.core.atom.call(null,three_body.core.start_time);
three_body.core.stop_running_ts = cljs.core.atom.call(null,null);
three_body.core.bodies = cljs.core.atom.call(null,three_body.core.init_bodies.call(null,(3)));
three_body.core.adjusted_G = 0.005;
three_body.core.g_force = (function three_body$core$g_force(first_body,second_body){

var dy = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(first_body) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(second_body));
var dx = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(first_body) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(second_body));
var angle = Math.atan2(dy,dx);
var distance = Math.sqrt(((dy * dy) + (dx * dx)));
var distance__$1 = (function (){var x__4214__auto__ = distance;
var y__4215__auto__ = three_body.core.offset;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var magnitude = (three_body.core.adjusted_G / (distance__$1 * distance__$1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((-1) * magnitude) * Math.cos(angle)),((magnitude * (-1)) * Math.sin(angle))], null);
});
three_body.core.vector_sum = (function three_body$core$vector_sum(vectors){
return cljs.core.reduce.call(null,(function (acc,x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.first.call(null,acc) + cljs.core.first.call(null,x)),(cljs.core.second.call(null,acc) + cljs.core.second.call(null,x))], null);
}),vectors);
});
three_body.core.step_accelleration = (function three_body$core$step_accelleration(var_args){
var G__27934 = arguments.length;
switch (G__27934) {
case 2:
return three_body.core.step_accelleration.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return three_body.core.step_accelleration.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(three_body.core.step_accelleration.cljs$core$IFn$_invoke$arity$2 = (function (i,bodies){

var acc_components = cljs.core.map.call(null,(function (j){
return three_body.core.g_force.call(null,cljs.core.nth.call(null,bodies,i),cljs.core.nth.call(null,bodies,j));
}),cljs.core.nth.call(null,three_body.core.comb,i));
return three_body.core.vector_sum.call(null,acc_components);
}));

(three_body.core.step_accelleration.cljs$core$IFn$_invoke$arity$1 = (function (bodies){
return cljs.core.map_indexed.call(null,(function (i,body){
var vec__27935 = three_body.core.step_accelleration.call(null,i,bodies);
var ax = cljs.core.nth.call(null,vec__27935,(0),null);
var ay = cljs.core.nth.call(null,vec__27935,(1),null);
return cljs.core.assoc.call(null,body,new cljs.core.Keyword(null,"ax","ax",-1516070907),ax,new cljs.core.Keyword(null,"ay","ay",-1860044923),ay);
}),bodies);
}));

(three_body.core.step_accelleration.cljs$lang$maxFixedArity = 2);

three_body.core.step_position = (function three_body$core$step_position(bodies,dt){

var integrator_1d = (function (x,v,a){
return ((x + (v * dt)) + ((0.5 * a) * (dt * dt)));
});
var body_integrator = (function (body){
return cljs.core.assoc.call(null,body,new cljs.core.Keyword(null,"x","x",2099068185),integrator_1d.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(body),new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(body),new cljs.core.Keyword(null,"ax","ax",-1516070907).cljs$core$IFn$_invoke$arity$1(body)),new cljs.core.Keyword(null,"y","y",-1757859776),integrator_1d.call(null,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(body),new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(body),new cljs.core.Keyword(null,"ay","ay",-1860044923).cljs$core$IFn$_invoke$arity$1(body)));
});
return cljs.core.map.call(null,body_integrator,bodies);
});
three_body.core.step_velocities = (function three_body$core$step_velocities(bodies_i,bodies_i1,dt){

var integrator_1d = (function (v,a,a1){
return (v + ((0.5 * (a + a1)) * dt));
});
var body_integrator = (function (i,body){
return cljs.core.assoc.call(null,body,new cljs.core.Keyword(null,"vx","vx",-1685168462),integrator_1d.call(null,new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,bodies_i,i)),new cljs.core.Keyword(null,"ax","ax",-1516070907).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,bodies_i,i)),new cljs.core.Keyword(null,"ax","ax",-1516070907).cljs$core$IFn$_invoke$arity$1(body)),new cljs.core.Keyword(null,"vy","vy",-2018509997),integrator_1d.call(null,new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,bodies_i,i)),new cljs.core.Keyword(null,"ay","ay",-1860044923).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,bodies_i,i)),new cljs.core.Keyword(null,"ay","ay",-1860044923).cljs$core$IFn$_invoke$arity$1(body)));
});
return cljs.core.map_indexed.call(null,body_integrator,bodies_i1);
});
three_body.core.wall_bounce = (function three_body$core$wall_bounce(var_args){
var G__27940 = arguments.length;
switch (G__27940) {
case 3:
return three_body.core.wall_bounce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 1:
return three_body.core.wall_bounce.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(three_body.core.wall_bounce.cljs$core$IFn$_invoke$arity$3 = (function (body,axis,velocity){
var first_wall = (three_body.core.min_boundary + three_body.core.offset);
var first_wall_hit = (first_wall >= cljs.core.get.call(null,body,axis));
var second_wall = (three_body.core.max_boundary - three_body.core.offset);
var second_wall_hit = (second_wall <= cljs.core.get.call(null,body,axis));
if(first_wall_hit){
return cljs.core.assoc.call(null,body,velocity,((-1) * cljs.core.get.call(null,body,velocity)),axis,first_wall);
} else {
if(second_wall_hit){
return cljs.core.assoc.call(null,body,velocity,((-1) * cljs.core.get.call(null,body,velocity)),axis,second_wall);
} else {
return body;

}
}
}));

(three_body.core.wall_bounce.cljs$core$IFn$_invoke$arity$1 = (function (bodies){
var bodies__$1 = cljs.core.map.call(null,(function (body){
return three_body.core.wall_bounce.call(null,body,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"vx","vx",-1685168462));
}),bodies);
var bodies__$2 = cljs.core.map.call(null,(function (body){
return three_body.core.wall_bounce.call(null,body,new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"vy","vy",-2018509997));
}),bodies__$1);
return bodies__$2;
}));

(three_body.core.wall_bounce.cljs$lang$maxFixedArity = 3);

/**
 * return false if animation is on, return decading dt if animation is off
 */
three_body.core.three_body_animation_off = (function three_body$core$three_body_animation_off(initial_dt){
var running = threeBodyAnimationOn();
var decay = 0.1;
var ts_nil = cljs.core._EQ_.call(null,cljs.core.deref.call(null,three_body.core.stop_running_ts),null);
if(((cljs.core.not.call(null,running)) && (ts_nil))){
cljs.core.swap_BANG_.call(null,three_body.core.stop_running_ts,(function (_,x){
return x;
}),initial_dt);
} else {
if(((cljs.core.not.call(null,running)) && ((!(ts_nil))))){
cljs.core.swap_BANG_.call(null,three_body.core.stop_running_ts,(function (prev){
var x__4214__auto__ = (0);
var y__4215__auto__ = (prev - decay);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
}));
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = running;
if(cljs.core.truth_(and__4115__auto__)){
return (!(ts_nil));
} else {
return and__4115__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,three_body.core.stop_running_ts,(function (_,x){
return x;
}),null);
} else {
}
}
}

return cljs.core.deref.call(null,three_body.core.stop_running_ts);
});
three_body.core.step_physics_simulation = (function three_body$core$step_physics_simulation(bodies,dt){
var running_dt = (function (){var x__4217__auto__ = dt;
var y__4218__auto__ = three_body.core.max_time_step;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
var stopped_dt = three_body.core.three_body_animation_off.call(null,running_dt);
var dt__$1 = ((cljs.core.not.call(null,stopped_dt))?running_dt:stopped_dt);
var bodies_i = three_body.core.step_accelleration.call(null,bodies);
var bodies_i1 = three_body.core.step_position.call(null,bodies_i,dt__$1);
var bodies_i1__$1 = three_body.core.step_accelleration.call(null,bodies_i1);
var bodies__$1 = three_body.core.step_velocities.call(null,bodies_i,bodies_i1__$1,dt__$1);
var bodies__$2 = three_body.core.wall_bounce.call(null,bodies__$1);
three_body.core.render.call(null,bodies__$2);

if(three_body.core.debug){
console.log(dt__$1);
} else {
}

return bodies__$2;
});
three_body.core.render = (function three_body$core$render(bodies){
var seq__27942 = cljs.core.seq.call(null,bodies);
var chunk__27943 = null;
var count__27944 = (0);
var i__27945 = (0);
while(true){
if((i__27945 < count__27944)){
var body = cljs.core._nth.call(null,chunk__27943,i__27945);
var style_27946 = document.getElementById(["body",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(body))].join('')).style;
(style_27946.bottom = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(body)),"%"].join(''));

(style_27946.left = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(body)),"%"].join(''));


var G__27947 = seq__27942;
var G__27948 = chunk__27943;
var G__27949 = count__27944;
var G__27950 = (i__27945 + (1));
seq__27942 = G__27947;
chunk__27943 = G__27948;
count__27944 = G__27949;
i__27945 = G__27950;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__27942);
if(temp__5720__auto__){
var seq__27942__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27942__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__27942__$1);
var G__27951 = cljs.core.chunk_rest.call(null,seq__27942__$1);
var G__27952 = c__4556__auto__;
var G__27953 = cljs.core.count.call(null,c__4556__auto__);
var G__27954 = (0);
seq__27942 = G__27951;
chunk__27943 = G__27952;
count__27944 = G__27953;
i__27945 = G__27954;
continue;
} else {
var body = cljs.core.first.call(null,seq__27942__$1);
var style_27955 = document.getElementById(["body",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(body))].join('')).style;
(style_27955.bottom = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(body)),"%"].join(''));

(style_27955.left = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(body)),"%"].join(''));


var G__27956 = cljs.core.next.call(null,seq__27942__$1);
var G__27957 = null;
var G__27958 = (0);
var G__27959 = (0);
seq__27942 = G__27956;
chunk__27943 = G__27957;
count__27944 = G__27958;
i__27945 = G__27959;
continue;
}
} else {
return null;
}
}
break;
}
});
three_body.core.main = (function three_body$core$main(ts){
window.requestAnimationFrame(three_body.core.main);

if((ts > three_body.core.start_time)){
cljs.core.swap_BANG_.call(null,three_body.core.bodies,three_body.core.step_physics_simulation,(ts - cljs.core.deref.call(null,three_body.core.prev_ts)));

cljs.core.swap_BANG_.call(null,three_body.core.prev_ts,(function (_,ts__$1){
return ts__$1;
}),ts);
} else {
}

if(three_body.core.debug){
return console.log(cljs.core.clj__GT_js.call(null,three_body.core.bodies));
} else {
return null;
}
});
three_body.core.render.call(null,cljs.core.deref.call(null,three_body.core.bodies));
three_body.core.main.call(null,(0));

//# sourceMappingURL=core.js.map?rel=1605556170637
