import * as S from './styled'
import { Props } from './types'

export const Main = ({
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJS e Styled Components'
}: Props) => {
  return (
    <S.Container>
      <S.Logo
        src="/logo.svg"
        alt="Imagem de um átomo com um texto React Avançado do lado direito."
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>

      <S.Illustration
        src="/hero-illustration.svg"
        alt="Homem sentado em uma cadeira de frente para três quadros. Um quadro verde grande e no centro e dois quadros brancos e pequenos aos lados do quadro grande."
      />
    </S.Container>
  )
}
