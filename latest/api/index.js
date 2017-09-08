Index.PACKAGES = {"co" : [], "co.movio" : [], "co.movio.scan" : [{"name" : "co.movio.scan.Scan", "members_trait" : [{"label" : "using", "tail" : "(f: (T) ⇒ Input): Scan[T, Output]", "member" : "co.movio.scan.Scan.using", "link" : "co\/movio\/scan\/Scan.html#using[T](f:T=>Input):co.movio.scan.Scan[T,Output]", "kind" : "def"}, {"label" : "map", "tail" : "(f: (Output) ⇒ T): Scan[Input, T]", "member" : "co.movio.scan.Scan.map", "link" : "co\/movio\/scan\/Scan.html#map[T](f:Output=>T):co.movio.scan.Scan[Input,T]", "kind" : "def"}, {"label" : "zip", "tail" : "(other: Scan[Input, T]): Scan[Input, (Output, T)]", "member" : "co.movio.scan.Scan.zip", "link" : "co\/movio\/scan\/Scan.html#zip[T](other:co.movio.scan.Scan[Input,T]):co.movio.scan.Scan[Input,(Output,T)]", "kind" : "def"}, {"label" : "andThen", "tail" : "(next: Scan[Output, Next]): Scan[Input, Next]", "member" : "co.movio.scan.Scan.andThen", "link" : "co\/movio\/scan\/Scan.html#andThen[Next](next:co.movio.scan.Scan[Output,Next]):co.movio.scan.Scan[Input,Next]", "kind" : "def"}, {"label" : "fold", "tail" : "(elems: Stream[Input]): Option[Output]", "member" : "co.movio.scan.Scan.fold", "link" : "co\/movio\/scan\/Scan.html#fold(elems:Stream[Input]):Option[Output]", "kind" : "def"}, {"label" : "scan", "tail" : "(elems: Stream[Input]): Stream[Output]", "member" : "co.movio.scan.Scan.scan", "link" : "co\/movio\/scan\/Scan.html#scan(elems:Stream[Input]):Stream[Output]", "kind" : "def"}, {"label" : "synchronized", "tail" : "(arg0: ⇒ T0): T0", "member" : "scala.AnyRef.synchronized", "link" : "co\/movio\/scan\/Scan.html#synchronized[T0](x$1:=>T0):T0", "kind" : "final def"}, {"label" : "##", "tail" : "(): Int", "member" : "scala.AnyRef.##", "link" : "co\/movio\/scan\/Scan.html###():Int", "kind" : "final def"}, {"label" : "!=", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.!=", "link" : "co\/movio\/scan\/Scan.html#!=(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "==", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.==", "link" : "co\/movio\/scan\/Scan.html#==(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "ne", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.ne", "link" : "co\/movio\/scan\/Scan.html#ne(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "eq", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.eq", "link" : "co\/movio\/scan\/Scan.html#eq(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "finalize", "tail" : "(): Unit", "member" : "scala.AnyRef.finalize", "link" : "co\/movio\/scan\/Scan.html#finalize():Unit", "kind" : "def"}, {"label" : "wait", "tail" : "(): Unit", "member" : "scala.AnyRef.wait", "link" : "co\/movio\/scan\/Scan.html#wait():Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long, arg1: Int): Unit", "member" : "scala.AnyRef.wait", "link" : "co\/movio\/scan\/Scan.html#wait(x$1:Long,x$2:Int):Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long): Unit", "member" : "scala.AnyRef.wait", "link" : "co\/movio\/scan\/Scan.html#wait(x$1:Long):Unit", "kind" : "final def"}, {"label" : "notifyAll", "tail" : "(): Unit", "member" : "scala.AnyRef.notifyAll", "link" : "co\/movio\/scan\/Scan.html#notifyAll():Unit", "kind" : "final def"}, {"label" : "notify", "tail" : "(): Unit", "member" : "scala.AnyRef.notify", "link" : "co\/movio\/scan\/Scan.html#notify():Unit", "kind" : "final def"}, {"label" : "toString", "tail" : "(): String", "member" : "scala.AnyRef.toString", "link" : "co\/movio\/scan\/Scan.html#toString():String", "kind" : "def"}, {"label" : "clone", "tail" : "(): AnyRef", "member" : "scala.AnyRef.clone", "link" : "co\/movio\/scan\/Scan.html#clone():Object", "kind" : "def"}, {"label" : "equals", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.equals", "link" : "co\/movio\/scan\/Scan.html#equals(x$1:Any):Boolean", "kind" : "def"}, {"label" : "hashCode", "tail" : "(): Int", "member" : "scala.AnyRef.hashCode", "link" : "co\/movio\/scan\/Scan.html#hashCode():Int", "kind" : "def"}, {"label" : "getClass", "tail" : "(): Class[_]", "member" : "scala.AnyRef.getClass", "link" : "co\/movio\/scan\/Scan.html#getClass():Class[_]", "kind" : "final def"}, {"label" : "asInstanceOf", "tail" : "(): T0", "member" : "scala.Any.asInstanceOf", "link" : "co\/movio\/scan\/Scan.html#asInstanceOf[T0]:T0", "kind" : "final def"}, {"label" : "isInstanceOf", "tail" : "(): Boolean", "member" : "scala.Any.isInstanceOf", "link" : "co\/movio\/scan\/Scan.html#isInstanceOf[T0]:Boolean", "kind" : "final def"}, {"label" : "step", "tail" : ": (State, Input) ⇒ (State, Output)", "member" : "co.movio.scan.Scan.step", "link" : "co\/movio\/scan\/Scan.html#step:(Scan.this.State,Input)=>(Scan.this.State,Output)", "kind" : "abstract val"}, {"label" : "initialState", "tail" : ": State", "member" : "co.movio.scan.Scan.initialState", "link" : "co\/movio\/scan\/Scan.html#initialState:Scan.this.State", "kind" : "abstract val"}, {"member" : "co.movio.scan.Scan.State", "error" : "unsupported entity"}], "shortDescription" : "", "object" : "co\/movio\/scan\/Scan$.html", "members_object" : [{"label" : "arrowInstance", "tail" : ": Arrow[Scan]", "member" : "co.movio.scan.Scan.arrowInstance", "link" : "co\/movio\/scan\/Scan$.html#arrowInstance:cats.arrow.Arrow[co.movio.scan.Scan]", "kind" : "implicit val"}, {"label" : "zip", "tail" : "(s1: Scan[A, B1], s2: Scan[A, B2], s3: Scan[A, B3], s4: Scan[A, B4], s5: Scan[A, B5], s6: Scan[A, B6], s7: Scan[A, B7], s8: Scan[A, B8], s9: Scan[A, B9], s10: Scan[A, B10]): Scan[A, (B1, B2, B3, B4, B5, B6, B7, B8, B9, B10)]", "member" : "co.movio.scan.Scan.zip", "link" : "co\/movio\/scan\/Scan$.html#zip[A,B1,B2,B3,B4,B5,B6,B7,B8,B9,B10](s1:co.movio.scan.Scan[A,B1],s2:co.movio.scan.Scan[A,B2],s3:co.movio.scan.Scan[A,B3],s4:co.movio.scan.Scan[A,B4],s5:co.movio.scan.Scan[A,B5],s6:co.movio.scan.Scan[A,B6],s7:co.movio.scan.Scan[A,B7],s8:co.movio.scan.Scan[A,B8],s9:co.movio.scan.Scan[A,B9],s10:co.movio.scan.Scan[A,B10]):co.movio.scan.Scan[A,(B1,B2,B3,B4,B5,B6,B7,B8,B9,B10)]", "kind" : "def"}, {"label" : "zip", "tail" : "(s1: Scan[A, B1], s2: Scan[A, B2], s3: Scan[A, B3], s4: Scan[A, B4], s5: Scan[A, B5], s6: Scan[A, B6], s7: Scan[A, B7], s8: Scan[A, B8], s9: Scan[A, B9]): Scan[A, (B1, B2, B3, B4, B5, B6, B7, B8, B9)]", "member" : "co.movio.scan.Scan.zip", "link" : "co\/movio\/scan\/Scan$.html#zip[A,B1,B2,B3,B4,B5,B6,B7,B8,B9](s1:co.movio.scan.Scan[A,B1],s2:co.movio.scan.Scan[A,B2],s3:co.movio.scan.Scan[A,B3],s4:co.movio.scan.Scan[A,B4],s5:co.movio.scan.Scan[A,B5],s6:co.movio.scan.Scan[A,B6],s7:co.movio.scan.Scan[A,B7],s8:co.movio.scan.Scan[A,B8],s9:co.movio.scan.Scan[A,B9]):co.movio.scan.Scan[A,(B1,B2,B3,B4,B5,B6,B7,B8,B9)]", "kind" : "def"}, {"label" : "zip", "tail" : "(s1: Scan[A, B1], s2: Scan[A, B2], s3: Scan[A, B3], s4: Scan[A, B4], s5: Scan[A, B5], s6: Scan[A, B6], s7: Scan[A, B7], s8: Scan[A, B8]): Scan[A, (B1, B2, B3, B4, B5, B6, B7, B8)]", "member" : "co.movio.scan.Scan.zip", "link" : "co\/movio\/scan\/Scan$.html#zip[A,B1,B2,B3,B4,B5,B6,B7,B8](s1:co.movio.scan.Scan[A,B1],s2:co.movio.scan.Scan[A,B2],s3:co.movio.scan.Scan[A,B3],s4:co.movio.scan.Scan[A,B4],s5:co.movio.scan.Scan[A,B5],s6:co.movio.scan.Scan[A,B6],s7:co.movio.scan.Scan[A,B7],s8:co.movio.scan.Scan[A,B8]):co.movio.scan.Scan[A,(B1,B2,B3,B4,B5,B6,B7,B8)]", "kind" : "def"}, {"label" : "zip", "tail" : "(s1: Scan[A, B1], s2: Scan[A, B2], s3: Scan[A, B3], s4: Scan[A, B4], s5: Scan[A, B5], s6: Scan[A, B6], s7: Scan[A, B7]): Scan[A, (B1, B2, B3, B4, B5, B6, B7)]", "member" : "co.movio.scan.Scan.zip", "link" : "co\/movio\/scan\/Scan$.html#zip[A,B1,B2,B3,B4,B5,B6,B7](s1:co.movio.scan.Scan[A,B1],s2:co.movio.scan.Scan[A,B2],s3:co.movio.scan.Scan[A,B3],s4:co.movio.scan.Scan[A,B4],s5:co.movio.scan.Scan[A,B5],s6:co.movio.scan.Scan[A,B6],s7:co.movio.scan.Scan[A,B7]):co.movio.scan.Scan[A,(B1,B2,B3,B4,B5,B6,B7)]", "kind" : "def"}, {"label" : "zip", "tail" : "(s1: Scan[A, B1], s2: Scan[A, B2], s3: Scan[A, B3], s4: Scan[A, B4], s5: Scan[A, B5], s6: Scan[A, B6]): Scan[A, (B1, B2, B3, B4, B5, B6)]", "member" : "co.movio.scan.Scan.zip", "link" : "co\/movio\/scan\/Scan$.html#zip[A,B1,B2,B3,B4,B5,B6](s1:co.movio.scan.Scan[A,B1],s2:co.movio.scan.Scan[A,B2],s3:co.movio.scan.Scan[A,B3],s4:co.movio.scan.Scan[A,B4],s5:co.movio.scan.Scan[A,B5],s6:co.movio.scan.Scan[A,B6]):co.movio.scan.Scan[A,(B1,B2,B3,B4,B5,B6)]", "kind" : "def"}, {"label" : "zip", "tail" : "(s1: Scan[A, B1], s2: Scan[A, B2], s3: Scan[A, B3], s4: Scan[A, B4], s5: Scan[A, B5]): Scan[A, (B1, B2, B3, B4, B5)]", "member" : "co.movio.scan.Scan.zip", "link" : "co\/movio\/scan\/Scan$.html#zip[A,B1,B2,B3,B4,B5](s1:co.movio.scan.Scan[A,B1],s2:co.movio.scan.Scan[A,B2],s3:co.movio.scan.Scan[A,B3],s4:co.movio.scan.Scan[A,B4],s5:co.movio.scan.Scan[A,B5]):co.movio.scan.Scan[A,(B1,B2,B3,B4,B5)]", "kind" : "def"}, {"label" : "zip", "tail" : "(s1: Scan[A, B1], s2: Scan[A, B2], s3: Scan[A, B3], s4: Scan[A, B4]): Scan[A, (B1, B2, B3, B4)]", "member" : "co.movio.scan.Scan.zip", "link" : "co\/movio\/scan\/Scan$.html#zip[A,B1,B2,B3,B4](s1:co.movio.scan.Scan[A,B1],s2:co.movio.scan.Scan[A,B2],s3:co.movio.scan.Scan[A,B3],s4:co.movio.scan.Scan[A,B4]):co.movio.scan.Scan[A,(B1,B2,B3,B4)]", "kind" : "def"}, {"label" : "zip", "tail" : "(s1: Scan[A, B1], s2: Scan[A, B2], s3: Scan[A, B3]): Scan[A, (B1, B2, B3)]", "member" : "co.movio.scan.Scan.zip", "link" : "co\/movio\/scan\/Scan$.html#zip[A,B1,B2,B3](s1:co.movio.scan.Scan[A,B1],s2:co.movio.scan.Scan[A,B2],s3:co.movio.scan.Scan[A,B3]):co.movio.scan.Scan[A,(B1,B2,B3)]", "kind" : "def"}, {"label" : "zip", "tail" : "(s1: Scan[A, B1], s2: Scan[A, B2]): Scan[A, (B1, B2)]", "member" : "co.movio.scan.Scan.zip", "link" : "co\/movio\/scan\/Scan$.html#zip[A,B1,B2](s1:co.movio.scan.Scan[A,B1],s2:co.movio.scan.Scan[A,B2]):co.movio.scan.Scan[A,(B1,B2)]", "kind" : "def"}, {"label" : "applicativeInstance", "tail" : "(): Apply[[β$0$]Scan[T, β$0$]]", "member" : "co.movio.scan.Scan.applicativeInstance", "link" : "co\/movio\/scan\/Scan$.html#applicativeInstance[T]:cats.Apply[[β$0$]co.movio.scan.Scan[T,β$0$]]", "kind" : "implicit def"}, {"label" : "collect", "tail" : "(): Scan[T, Seq[T]]", "member" : "co.movio.scan.Scan.collect", "link" : "co\/movio\/scan\/Scan$.html#collect[T]:co.movio.scan.Scan[T,Seq[T]]", "kind" : "def"}, {"label" : "findLast", "tail" : "(pred: (T) ⇒ Boolean): Scan[T, Option[T]]", "member" : "co.movio.scan.Scan.findLast", "link" : "co\/movio\/scan\/Scan$.html#findLast[T](pred:T=>Boolean):co.movio.scan.Scan[T,Option[T]]", "kind" : "def"}, {"label" : "findFirst", "tail" : "(pred: (T) ⇒ Boolean): Scan[T, Option[T]]", "member" : "co.movio.scan.Scan.findFirst", "link" : "co\/movio\/scan\/Scan$.html#findFirst[T](pred:T=>Boolean):co.movio.scan.Scan[T,Option[T]]", "kind" : "def"}, {"label" : "last", "tail" : "(): Scan[T, T]", "member" : "co.movio.scan.Scan.last", "link" : "co\/movio\/scan\/Scan$.html#last[T]:co.movio.scan.Scan[T,T]", "kind" : "def"}, {"label" : "first", "tail" : "(): Scan[T, T]", "member" : "co.movio.scan.Scan.first", "link" : "co\/movio\/scan\/Scan$.html#first[T]:co.movio.scan.Scan[T,T]", "kind" : "def"}, {"label" : "previous", "tail" : "(): Scan[T, Option[T]]", "member" : "co.movio.scan.Scan.previous", "link" : "co\/movio\/scan\/Scan$.html#previous[T]:co.movio.scan.Scan[T,Option[T]]", "kind" : "def"}, {"label" : "max", "tail" : "(arg0: Ordering[T]): Scan[T, T]", "member" : "co.movio.scan.Scan.max", "link" : "co\/movio\/scan\/Scan$.html#max[T](implicitevidence$3:Ordering[T]):co.movio.scan.Scan[T,T]", "kind" : "def"}, {"label" : "min", "tail" : "(arg0: Ordering[T]): Scan[T, T]", "member" : "co.movio.scan.Scan.min", "link" : "co\/movio\/scan\/Scan$.html#min[T](implicitevidence$2:Ordering[T]):co.movio.scan.Scan[T,T]", "kind" : "def"}, {"label" : "mean", "tail" : "(): Scan[Double, Double]", "member" : "co.movio.scan.Scan.mean", "link" : "co\/movio\/scan\/Scan$.html#mean:co.movio.scan.Scan[Double,Double]", "kind" : "def"}, {"label" : "count", "tail" : "(pred: (T) ⇒ Boolean): Scan[T, Int]", "member" : "co.movio.scan.Scan.count", "link" : "co\/movio\/scan\/Scan$.html#count[T](pred:T=>Boolean):co.movio.scan.Scan[T,Int]", "kind" : "def"}, {"label" : "sum", "tail" : "(evidence: Numeric[T]): Scan[T, T]", "member" : "co.movio.scan.Scan.sum", "link" : "co\/movio\/scan\/Scan$.html#sum[T](implicitevidence:Numeric[T]):co.movio.scan.Scan[T,T]", "kind" : "def"}, {"label" : "combine", "tail" : "(arg0: Semigroup[T]): Scan[T, T]", "member" : "co.movio.scan.Scan.combine", "link" : "co\/movio\/scan\/Scan$.html#combine[T](implicitevidence$1:cats.Semigroup[T]):co.movio.scan.Scan[T,T]", "kind" : "def"}, {"label" : "id", "tail" : "(): Scan[T, T]", "member" : "co.movio.scan.Scan.id", "link" : "co\/movio\/scan\/Scan$.html#id[T]:co.movio.scan.Scan[T,T]", "kind" : "def"}, {"label" : "lift", "tail" : "(): ((A) ⇒ B) ⇒ Scan[A, B]", "member" : "co.movio.scan.Scan.lift", "link" : "co\/movio\/scan\/Scan$.html#lift[A,B]:(A=>B)=>co.movio.scan.Scan[A,B]", "kind" : "def"}, {"label" : "apply", "tail" : "(initialState_: S)(step_: (S, A) ⇒ (S, B)): Scan[A, B]", "member" : "co.movio.scan.Scan.apply", "link" : "co\/movio\/scan\/Scan$.html#apply[S,A,B](initialState_:S)(step_:(S,A)=>(S,B)):co.movio.scan.Scan[A,B]", "kind" : "def"}, {"label" : "synchronized", "tail" : "(arg0: ⇒ T0): T0", "member" : "scala.AnyRef.synchronized", "link" : "co\/movio\/scan\/Scan$.html#synchronized[T0](x$1:=>T0):T0", "kind" : "final def"}, {"label" : "##", "tail" : "(): Int", "member" : "scala.AnyRef.##", "link" : "co\/movio\/scan\/Scan$.html###():Int", "kind" : "final def"}, {"label" : "!=", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.!=", "link" : "co\/movio\/scan\/Scan$.html#!=(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "==", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.==", "link" : "co\/movio\/scan\/Scan$.html#==(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "ne", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.ne", "link" : "co\/movio\/scan\/Scan$.html#ne(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "eq", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.eq", "link" : "co\/movio\/scan\/Scan$.html#eq(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "finalize", "tail" : "(): Unit", "member" : "scala.AnyRef.finalize", "link" : "co\/movio\/scan\/Scan$.html#finalize():Unit", "kind" : "def"}, {"label" : "wait", "tail" : "(): Unit", "member" : "scala.AnyRef.wait", "link" : "co\/movio\/scan\/Scan$.html#wait():Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long, arg1: Int): Unit", "member" : "scala.AnyRef.wait", "link" : "co\/movio\/scan\/Scan$.html#wait(x$1:Long,x$2:Int):Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long): Unit", "member" : "scala.AnyRef.wait", "link" : "co\/movio\/scan\/Scan$.html#wait(x$1:Long):Unit", "kind" : "final def"}, {"label" : "notifyAll", "tail" : "(): Unit", "member" : "scala.AnyRef.notifyAll", "link" : "co\/movio\/scan\/Scan$.html#notifyAll():Unit", "kind" : "final def"}, {"label" : "notify", "tail" : "(): Unit", "member" : "scala.AnyRef.notify", "link" : "co\/movio\/scan\/Scan$.html#notify():Unit", "kind" : "final def"}, {"label" : "toString", "tail" : "(): String", "member" : "scala.AnyRef.toString", "link" : "co\/movio\/scan\/Scan$.html#toString():String", "kind" : "def"}, {"label" : "clone", "tail" : "(): AnyRef", "member" : "scala.AnyRef.clone", "link" : "co\/movio\/scan\/Scan$.html#clone():Object", "kind" : "def"}, {"label" : "equals", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.equals", "link" : "co\/movio\/scan\/Scan$.html#equals(x$1:Any):Boolean", "kind" : "def"}, {"label" : "hashCode", "tail" : "(): Int", "member" : "scala.AnyRef.hashCode", "link" : "co\/movio\/scan\/Scan$.html#hashCode():Int", "kind" : "def"}, {"label" : "getClass", "tail" : "(): Class[_]", "member" : "scala.AnyRef.getClass", "link" : "co\/movio\/scan\/Scan$.html#getClass():Class[_]", "kind" : "final def"}, {"label" : "asInstanceOf", "tail" : "(): T0", "member" : "scala.Any.asInstanceOf", "link" : "co\/movio\/scan\/Scan$.html#asInstanceOf[T0]:T0", "kind" : "final def"}, {"label" : "isInstanceOf", "tail" : "(): Boolean", "member" : "scala.Any.isInstanceOf", "link" : "co\/movio\/scan\/Scan$.html#isInstanceOf[T0]:Boolean", "kind" : "final def"}], "trait" : "co\/movio\/scan\/Scan.html", "kind" : "trait"}]};