��#   =؀�  R e a c t   D e m o 
 
 
 
 # #   =���  G i �i   t h i �u   
 
 
 
 � y   l �   m �t   d �  � n   R e a c t   �n   g i �n   p h �c   v �  m �c   � c h   h �c   t �p . 
 
 
 
 # # #   =�9�  T � n h   n n g   c h � n h     
 
 -   * * T r a n g   n g   n h �p   ( L o g i n ) : * *   N g ��i   d � n g   n h �p   t � i   k h o �n   �   n g   k �   �  t r u y   c �p   h �  t h �n g .     
 
 -   * * T r a n g   n g   k �   ( R e g i s t e r ) : * *   L �u   t � i   k h o �n   v � o   L o c a l   S t o r a g e .     
 
 -   * * T r a n g   D a s h b o a r d : * *   H i �n   t h �  t � n   n g ��i   d � n g   v �   c �   n � t   n g   x u �t ,   n �u   c h �a   n g   n h �p ,   s �  b �  i �u   h ��n g   v �  t r a n g   L o g i n .     
 
     
 
 - - - 
 
 
 
 # #   =�'�  C � i   �t   m � i   t r ��n g     
 
 
 
 # # #   1 ��  C � i   �t   * * N o d e . j s * *   &   * * n p m * *     
 
 T �i   t �:   [ N o d e . j s   o f f i c i a l   s i t e ] ( h t t p s : / / n o d e j s . o r g / )     
 
 
 
 # # #   2 ��  T �o   d �  � n   R e a c t   b �n g   * * V i t e * *     
 
 ` ` ` s h 
 
 n p x   c r e a t e - v i t e @ l a t e s t   r e a c t - d e m o   - - t e m p l a t e   r e a c t - t s 
 
 c d   r e a c t - d e m o 
 
 n p m   i n s t a l l 
 
 ` ` ` 
 
 
 
 # # #   3 ��  C h �y   d �  � n     
 
 ` ` ` s h 
 
 n p m   r u n   d e v 
 
 ` ` ` 
 
 =���  * * M �  t r � n h   d u y �t : * *   ` h t t p : / / l o c a l h o s t : 5 1 7 3 / `     
 
 
 
 - - - 
 
 
 
 # #   =���  C �u   t r � c   t h �  m �c     
 
 
 
 ` ` ` 
 
 r e a c t - d e m o / 
 
       % % %  s r c / 
 
       %      % % %  c o n t e x t s /               #   Q u �n   l �   t r �n g   t h � i   t o � n   c �c   ( A u t h C o n t e x t ) 
 
       %      % % %  p a g e s /                     #   C h �a   c � c   t r a n g   L o g i n ,   R e g i s t e r ,   D a s h b o a r d 
 
       %      % % %  r o u t e s /                   #   C �u   h � n h   R o u t e r 
 
       %      % % %  s t y l e s /                   #   C h �a   f i l e   C S S 
 
       %      % % %  A p p . t s x                   #   C o m p o n e n t   c h � n h 
 
       %      % % %  m a i n . t s x                 #   E n t r y   p o i n t   c �a   �n g   d �n g 
 
       % % %  p u b l i c / 
 
       % % %  p a c k a g e . j s o n 
 
       % % %  t s c o n f i g . j s o n 
 
       % % %  R E A D M E . m d 
 
 ` ` ` 
 
 
 
 - - - 
 
 
 
 # #   =��  L u �n g   h o �t   �n g     
 
 
 
 1 ��  N g ��i   d � n g   t r u y   c �p   * * L o g i n * *   ( h o �c   b �  c h u y �n   h ��n g   n �u   c h �a   n g   n h �p ) .     
 
 2 ��  N �u   c h �a   c �   t � i   k h o �n   �!  N h �n   * * n g   k � * *   �!  ��c   c h u y �n   s a n g   * * L o g i n * * .     
 
 3 ��  N �u   n g   n h �p   t h � n h   c � n g   �!  C h u y �n   �n   * * D a s h b o a r d * * .     
 
 4 ��  D a s h b o a r d   h i �n   t h �  t � n   t � i   k h o �n   +   n � t   * * L o g o u t * * .     
 
 5 ��  N h �n   * * L o g o u t * *   �!  Q u a y   v �  * * L o g i n * * ,   p h �i   n g   n h �p   l �i   m �i   v � o   D a s h b o a r d .     
 
 
 
 - - - 
 
 
 
 # #   =�
�  G i �i   t h � c h   C o d e     
 
 
 
 # # #   <د�  1 .   ` A u t h C o n t e x t . t s x `   -   Q u �n   l �   t r �n g   t h � i   n g   n h �p 
 
 ` ` ` t s x 
 
 i m p o r t   {   c r e a t e C o n t e x t ,   u s e S t a t e ,   R e a c t N o d e   }   f r o m   " r e a c t " ; 
 
 
 
 i n t e r f a c e   A u t h C o n t e x t T y p e   { 
 
     u s e r :   s t r i n g   |   n u l l ; 
 
     l o g i n :   ( u s e r n a m e :   s t r i n g )   = >   v o i d ; 
 
     l o g o u t :   ( )   = >   v o i d ; 
 
 } 
 
 
 
 e x p o r t   c o n s t   A u t h C o n t e x t   =   c r e a t e C o n t e x t < A u t h C o n t e x t T y p e   |   n u l l > ( n u l l ) ; 
 
 
 
 e x p o r t   c o n s t   A u t h P r o v i d e r   =   ( {   c h i l d r e n   } :   {   c h i l d r e n :   R e a c t N o d e   } )   = >   { 
 
     c o n s t   [ u s e r ,   s e t U s e r ]   =   u s e S t a t e < s t r i n g   |   n u l l > ( n u l l ) ; 
 
 
 
     c o n s t   l o g i n   =   ( u s e r n a m e :   s t r i n g )   = >   s e t U s e r ( u s e r n a m e ) ; 
 
     c o n s t   l o g o u t   =   ( )   = >   s e t U s e r ( n u l l ) ; 
 
 
 
     r e t u r n   ( 
 
         < A u t h C o n t e x t . P r o v i d e r   v a l u e = { {   u s e r ,   l o g i n ,   l o g o u t   } } > 
 
             { c h i l d r e n } 
 
         < / A u t h C o n t e x t . P r o v i d e r > 
 
     ) ; 
 
 } ; 
 
 ` ` ` 
 
 =�9�  * * ` c r e a t e C o n t e x t ` * * :   T �o   C o n t e x t   �  q u �n   l �   t r �n g   t h � i   n g   n h �p .     
 
 =�9�  * * ` A u t h P r o v i d e r ` * * :   B �c   t o � n   b �  �n g   d �n g ,   c u n g   c �p   ` u s e r ` ,   ` l o g i n ` ,   ` l o g o u t ` .     
 
 
 
 - - - 
 
 
 
 # # #   =��  2 .   ` L o g i n . t s x `   -   X �  l �   n g   n h �p 
 
 ` ` ` t s x 
 
 c o n s t   h a n d l e S u b m i t   =   ( e :   R e a c t . F o r m E v e n t )   = >   { 
 
     e . p r e v e n t D e f a u l t ( ) ; 
 
     c o n s t   s t o r e d U s e r   =   J S O N . p a r s e ( l o c a l S t o r a g e . g e t I t e m ( " m o c k U s e r " )   | |   " { } " ) ; 
 
     i f   ( s t o r e d U s e r . u s e r n a m e   = = =   l o g i n D a t a . u s e r n a m e   & &   s t o r e d U s e r . p a s s w o r d   = = =   l o g i n D a t a . p a s s w o r d )   { 
 
         a l e r t ( " n g   n h �p   t h � n h   c � n g ! " ) ; 
 
         l o c a l S t o r a g e . s e t I t e m ( " l o g g e d I n U s e r " ,   J S O N . s t r i n g i f y ( s t o r e d U s e r ) ) ; 
 
         n a v i g a t e ( " / d a s h b o a r d " ) ;   
 
     }   e l s e   { 
 
         s e t E r r o r ( " T � n   n g   n h �p   h o �c   m �t   k h �u   k h � n g   � n g ! " ) ; 
 
     } 
 
 } ; 
 
 ` ` ` 
 
 =�9�  * * K i �m   t r a   L o c a l   S t o r a g e * * :   X � c   t h �c   t � i   k h o �n .     
 
 =�9�  * * N �u   � n g * * :   L �u   v � o   ` l o g g e d I n U s e r ` ,   c h u y �n   h ��n g   * * D a s h b o a r d * * .     
 
 =�9�  * * N �u   s a i * * :   H i �n   t h �  l �i . 
 
 
 
 - - - 
 
 
 
 # # #   =���  3 .   ` R e g i s t e r . t s x `   -   X �  l �   n g   k � 
 
 ` ` ` t s x 
 
 c o n s t   h a n d l e S u b m i t   =   ( e :   R e a c t . F o r m E v e n t )   = >   { 
 
     e . p r e v e n t D e f a u l t ( ) ; 
 
     l o c a l S t o r a g e . s e t I t e m ( " m o c k U s e r " ,   J S O N . s t r i n g i f y ( u s e r ) ) ; 
 
     a l e r t ( " n g   k �   t h � n h   c � n g ! " ) ; 
 
     n a v i g a t e ( " / l o g i n " ) ;   
 
 } ; 
 
 ` ` ` 
 
 =�9�  * * L �u   t � i   k h o �n * *   v � o   L o c a l   S t o r a g e .     
 
 =�9�  * * C h u y �n   h ��n g * *   s a n g   * * L o g i n * * . 
 
 
 
 - - - 
 
 
 
 # # #   =إ��  4 .   ` D a s h b o a r d . t s x `   -   H i �n   t h �  t h � n g   t i n   n g ��i   d � n g   &   L o g o u t 
 
 ` ` ` t s x 
 
 i m p o r t   {   u s e E f f e c t   }   f r o m   " r e a c t " ; 
 
 i m p o r t   {   u s e N a v i g a t e   }   f r o m   " r e a c t - r o u t e r - d o m " ; 
 
 
 
 c o n s t   D a s h b o a r d   =   ( )   = >   { 
 
     c o n s t   n a v i g a t e   =   u s e N a v i g a t e ( ) ; 
 
 
 
     u s e E f f e c t ( ( )   = >   { 
 
         c o n s t   l o g g e d I n U s e r   =   J S O N . p a r s e ( l o c a l S t o r a g e . g e t I t e m ( " l o g g e d I n U s e r " )   | |   " n u l l " ) ; 
 
         
 
         i f   ( ! l o g g e d I n U s e r )   { 
 
             a l e r t ( " B �n   c h �a   n g   n h �p ! " ) ; 
 
             n a v i g a t e ( " / l o g i n " ) ;     
 
         } 
 
     } ,   [ n a v i g a t e ] ) ;     
 
 
 
     c o n s t   h a n d l e L o g o u t   =   ( )   = >   { 
 
         l o c a l S t o r a g e . r e m o v e I t e m ( " l o g g e d I n U s e r " ) ; 
 
         a l e r t ( " B �n   �   n g   x u �t ! " ) ; 
 
         n a v i g a t e ( " / l o g i n " ) ; 
 
     } ; 
 
 
 
     r e t u r n   ( 
 
         < d i v > 
 
             < h 2 > C h � o   m �n g ,   { J S O N . p a r s e ( l o c a l S t o r a g e . g e t I t e m ( " l o g g e d I n U s e r " )   | |   " { } " ) . u s e r n a m e } ! < / h 2 > 
 
             < b u t t o n   o n C l i c k = { h a n d l e L o g o u t } > n g   x u �t < / b u t t o n > 
 
         < / d i v > 
 
     ) ; 
 
 } ; 
 
 
 
 e x p o r t   d e f a u l t   D a s h b o a r d ; 
 
 ` ` ` 
 
 =�9�  * * u s e E f f e c t * * :   N �u   c h �a   n g   n h �p ,   t �  �n g   c h u y �n   v �  * * L o g i n * * .     
 
 =�9�  * * L o g o u t * * :   X � a   ` l o g g e d I n U s e r `   k h �i   L o c a l   S t o r a g e ,   q u a y   l �i   * * L o g i n * * . 
 
 
 
 - - - 
 
 
 
 # # #   =����  5 .   ` A p p R o u t e s . t s x `   -   Q u �n   l �   i �u   h ��n g 
 
 ` ` ` t s x 
 
 < R o u t e s > 
 
     < R o u t e   p a t h = " / "   e l e m e n t = { < L o g i n   / > }   / > 
 
     < R o u t e   p a t h = " / l o g i n "   e l e m e n t = { < L o g i n   / > }   / > 
 
     < R o u t e   p a t h = " / r e g i s t e r "   e l e m e n t = { < R e g i s t e r   / > }   / > 
 
     < R o u t e   p a t h = " / d a s h b o a r d "   e l e m e n t = { < D a s h b o a r d   / > }   / > 
 
 < / R o u t e s > 
 
 ` ` ` 
 
 =�9�  * * C �u   h � n h   R e a c t   R o u t e r * *   �  i �u   h ��n g   g i �a   c � c   t r a n g . 
 
 
 
 - - - 
 
 
 
 # # #   <���  6 .   ` A p p . t s x `   -   T h � n h   p h �n   g �c   c �a   �n g   d �n g 
 
 ` ` ` t s x 
 
 < A u t h P r o v i d e r > 
 
     < A p p R o u t e s   / > 
 
 < / A u t h P r o v i d e r > 
 
 ` ` ` 
 
 =�9�  * * B �c   t o � n   b �  �n g   d �n g * *   v �i   ` A u t h P r o v i d e r ` ,   g i � p   q u �n   l �   t r �n g   t h � i   n g   n h �p . 
 
 
 
 - - - 
 
 
 
 # # #   =؀�  7 .   ` m a i n . t s x `   -   i �m   k h �i   c h �y   c �a   �n g   d �n g 
 
 ` ` ` t s x 
 
 c r e a t e R o o t ( d o c u m e n t . g e t E l e m e n t B y I d ( ' r o o t ' ) ! ) . r e n d e r ( 
 
     < S t r i c t M o d e > 
 
         < A p p   / > 
 
     < / S t r i c t M o d e > 
 
 ) 
 
 ` ` ` 
 
 =�9�  * * R e n d e r   �n g   d �n g * *   R e a c t   v � o   * * D O M * * . 
 
 
 
 - - - 
 
 
 
 
